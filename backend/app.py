import json
import mimetypes
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

BASE_DIR = Path(__file__).resolve().parent.parent
FRONTEND_DIR = BASE_DIR / "frontend"
IMAGES_DIR = BASE_DIR / "frontend/images"
CONTACT_LOG = BASE_DIR / "backend" / "contact_messages.jsonl"
MAX_CONTACT_RESULTS = 5


class MeridianHandler(BaseHTTPRequestHandler):
    def _read_contact_submissions(self):
        if not CONTACT_LOG.exists():
            return []

        submissions = []
        with CONTACT_LOG.open("r", encoding="utf-8") as handle:
            for line in handle:
                line = line.strip()
                if not line:
                    continue

                try:
                    submissions.append(json.loads(line))
                except json.JSONDecodeError:
                    continue

        submissions.reverse()
        return submissions[:MAX_CONTACT_RESULTS]

    def _read_json_body(self):
        content_length = int(self.headers.get("Content-Length", "0"))
        raw_body = self.rfile.read(content_length) if content_length else b"{}"
        charset = self.headers.get_content_charset("utf-8")

        try:
            body = raw_body.decode(charset)
        except (LookupError, UnicodeDecodeError):
            body = raw_body.decode("utf-8", errors="replace")

        return json.loads(body or "{}")

    def _send_json(self, status_code, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _send_static(self, file_path):
        candidate = file_path.resolve()
        if not candidate.exists() or not candidate.is_file():
            self._send_json(404, {"error": "not_found"})
            return

        content_type, _ = mimetypes.guess_type(str(candidate))
        if content_type is None:
            content_type = "application/octet-stream"

        body = candidate.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path == "/health":
            self._send_json(200, {"status": "ok"})
            return

        if parsed_path.path == "/api/contact":
            self._send_json(200, {"submissions": self._read_contact_submissions()})
            return

        if parsed_path.path in {"/", "/index.html", "/contact"}:
            self._send_static(FRONTEND_DIR / "index.html")
            return

        if parsed_path.path.startswith("/images/"):
            # requested_path = parsed_path.path.removeprefix("/images/")
            requested_path = parsed_path.path.removeprefix("/images/")
            safe_path = (IMAGES_DIR / requested_path).resolve()
            if safe_path.is_relative_to(IMAGES_DIR.resolve()):
                self._send_static(safe_path)
                return

        requested_path = parsed_path.path.lstrip("/")
        if requested_path:
            root_safe_path = (BASE_DIR / requested_path).resolve()
            if root_safe_path.is_relative_to(BASE_DIR.resolve()) and root_safe_path.suffix == ".html":
                self._send_static(root_safe_path)
                return

            safe_path = (FRONTEND_DIR / requested_path).resolve()
            if safe_path.is_relative_to(FRONTEND_DIR.resolve()):
                self._send_static(safe_path)
                return

        self._send_json(404, {"error": "not_found"})

    def do_POST(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path not in {"/api/compose", "/api/contact"}:
            self._send_json(404, {"error": "not_found"})
            return

        payload = self._read_json_body()

        if parsed_path.path == "/api/contact":
            name = (payload.get("name") or "").strip()
            email = (payload.get("email") or "").strip()
            message = (payload.get("message") or "").strip()

            if not name or not email or not message:
                self._send_json(
                    400,
                    {
                        "message": "Completa nombre, correo y consulta antes de enviar.",
                    },
                )
                return

            CONTACT_LOG.parent.mkdir(parents=True, exist_ok=True)
            submission = {
                "submitted_at": datetime.now(timezone.utc).isoformat(),
                "name": name,
                "email": email,
                "message": message,
            }
            with CONTACT_LOG.open("a", encoding="utf-8") as handle:
                handle.write(json.dumps(submission, ensure_ascii=False) + "\n")

            self._send_json(
                200,
                {
                    "message": "Consulta enviada correctamente. Te responderé pronto.",
                },
            )
            return

        prompt_text = (payload.get("prompt") or "").strip()

        if not prompt_text:
            self._send_json(
                200,
                {
                    "message": "El prompt está vacío. Añade una intención de viaje.",
                    "vake": {
                        "title": "Vake · Ruta de silencio",
                        "summary": "Prueba con una idea más concreta para obtener un resultado más útil.",
                        "highlights": ["Define el lugar", "Indica la duración", "Añade un tono"],
                    },
                },
            )
            return

        self._send_json(
            200,
            {
                "message": "Vake preparado con éxito.",
                "vake": {
                    "title": "Vake · Ruta de inspiración",
                    "summary": f"Tu idea de viaje se ha convertido en un esquema envolvente: {prompt_text}",
                    "highlights": [
                        "Ritmo pausado y contemplativo",
                        "Puntos de descanso y observación",
                        "Una narrativa visual para la siguiente etapa",
                    ],
                },
            },
        )

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 8000), MeridianHandler)
    print("Aplicación disponible en http://127.0.0.1:8000")
    print("API en http://127.0.0.1:8000/health")
    server.serve_forever()
