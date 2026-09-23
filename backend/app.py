import html
import json
import mimetypes
import os
import smtplib
import sys
import threading
from datetime import datetime, timezone
from email.message import EmailMessage
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse, unquote

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if sys.stderr and hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("video/mp4", ".mp4")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")

BASE_DIR = Path(__file__).resolve().parent.parent
FRONTEND_DIR = BASE_DIR / "frontend"
IMAGES_DIR = BASE_DIR / "frontend/images"
CONTACT_LOG = BASE_DIR / "backend" / "contact_messages.jsonl"
ENV_FILE = BASE_DIR / ".env"
MAX_CONTACT_RESULTS = 5


def load_env(env_path: Path) -> None:
    """Carga variables desde .env sin dependencias externas."""
    if not env_path.exists():
        return
    try:
        with env_path.open("r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                key, val = line.split("=", 1)
                key = key.strip()
                val = val.strip().strip('"').strip("'")
                if key:
                    os.environ[key] = val
    except Exception as e:
        print(f"[ENV] Error al leer {env_path}: {e}")


# Carga inicial de variables de entorno
load_env(ENV_FILE)


def send_contact_email(name: str, sender_email: str, message_body: str) -> bool:
    """Envía notificación por correo electrónico del mensaje recibido en contacto."""
    try:
        # Recargar .env para reflejar cambios en caliente sin reiniciar el servidor
        load_env(ENV_FILE)

        recipient = os.environ.get("RECIPIENT_EMAIL", "pato.geojimenez@gmail.com").strip()
        smtp_host = os.environ.get("SMTP_HOST", "smtp.gmail.com").strip()
        smtp_port_raw = os.environ.get("SMTP_PORT", "587").strip()
        smtp_user = os.environ.get("SMTP_USER", "").strip() or recipient
        smtp_password = os.environ.get("SMTP_PASSWORD", "").strip()
        use_tls = os.environ.get("SMTP_USE_TLS", "true").lower() in {"true", "1", "yes"}

        now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

        if not smtp_password:
            print(f"\n[CONTACT] Nuevo mensaje recibido de '{name}' <{sender_email}>.", flush=True)
            print(f"[CONTACT AVISO] Para que los mensajes se reenvíen automáticamente a {recipient}, genera una 'Contraseña de aplicación' en tu cuenta de Google (https://myaccount.google.com/apppasswords) y colócala en el archivo .env en la variable SMTP_PASSWORD.", flush=True)
            print(f"[CONTACT INFO] El mensaje se guardó correctamente en backend/contact_messages.jsonl\n", flush=True)
            return False

        try:
            smtp_port = int(smtp_port_raw)
        except ValueError:
            smtp_port = 587

        msg = EmailMessage()
        msg["Subject"] = f"Mensaje de contacto de {name} — The Pale Blue Dot"
        msg["From"] = f"The Pale Blue Dot <{smtp_user}>"
        msg["To"] = recipient
        msg["Reply-To"] = f"{name} <{sender_email}>"

        plain_text = (
            f"Has recibido un nuevo mensaje desde el sitio web The Pale Blue Dot:\n\n"
            f"Nombre: {name}\n"
            f"Correo: {sender_email}\n"
            f"Fecha:  {now_str}\n\n"
            f"Mensaje:\n"
            f"--------------------------------------------------\n"
            f"{message_body}\n"
            f"--------------------------------------------------\n\n"
            f"(Puedes responder directamente a este correo para escribirle a {name})"
        )
        msg.set_content(plain_text)

        safe_name = html.escape(name)
        safe_email = html.escape(sender_email)
        safe_body = html.escape(message_body)

        html_content = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {{
      margin: 0; padding: 28px 16px; background-color: #0b0c10;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #e5e5e7;
    }}
    .card {{
      max-width: 580px; margin: 0 auto; background: #13151b;
      border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px;
      padding: 32px; box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5);
    }}
    .eyebrow {{
      font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
      color: #8e909a; margin-bottom: 8px;
    }}
    .title {{
      font-size: 20px; font-weight: 500; color: #ffffff; margin: 0 0 24px 0;
      letter-spacing: -0.01em;
    }}
    .meta-box {{
      background: rgba(255, 255, 255, 0.03); border-radius: 6px;
      padding: 16px; margin-bottom: 24px; font-size: 14px; line-height: 1.6;
    }}
    .meta-row {{ margin-bottom: 8px; }}
    .meta-row:last-child {{ margin-bottom: 0; }}
    .label {{ color: #8e909a; font-weight: 500; }}
    .value {{ color: #ffffff; }}
    .value a {{ color: #7cb3ff; text-decoration: none; }}
    .msg-label {{
      font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
      color: #8e909a; margin-bottom: 8px;
    }}
    .message-box {{
      background: rgba(0, 0, 0, 0.3); border-left: 2px solid #7cb3ff;
      border-radius: 4px; padding: 18px; font-size: 15px; line-height: 1.65;
      color: #f0f0f3; white-space: pre-wrap; margin-bottom: 28px;
    }}
    .actions {{ text-align: center; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.08); }}
    .btn {{
      display: inline-block; background: #ffffff; color: #000000;
      text-decoration: none; padding: 11px 26px; font-size: 13px;
      font-weight: 600; letter-spacing: 0.04em; border-radius: 4px;
    }}
  </style>
</head>
<body>
  <div class="card">
    <div class="eyebrow">The Pale Blue Dot · Contacto</div>
    <h1 class="title">Nuevo mensaje recibido</h1>
    <div class="meta-box">
      <div class="meta-row"><span class="label">Remitente:</span> <span class="value">{safe_name}</span></div>
      <div class="meta-row"><span class="label">Email:</span> <span class="value"><a href="mailto:{safe_email}">{safe_email}</a></span></div>
      <div class="meta-row"><span class="label">Fecha:</span> <span class="value">{now_str}</span></div>
    </div>
    <div class="msg-label">Mensaje</div>
    <div class="message-box">{safe_body}</div>
    <div class="actions">
      <a class="btn" href="mailto:{safe_email}">Responder directamente a {safe_name}</a>
    </div>
  </div>
</body>
</html>
"""
        msg.add_alternative(html_content, subtype="html")

        if smtp_port == 465:
            with smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=15) as s:
                s.login(smtp_user, smtp_password)
                s.send_message(msg)
        else:
            with smtplib.SMTP(smtp_host, smtp_port, timeout=15) as s:
                if use_tls:
                    s.starttls()
                s.login(smtp_user, smtp_password)
                s.send_message(msg)
        print(f"[CONTACT] Correo enviado exitosamente a {recipient} (remitente: {sender_email}).", flush=True)
        return True
    except Exception as e:
        print(f"[CONTACT ERROR] Falló el procesamiento/envío del correo: {e}", flush=True)
        return False


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

        if candidate.suffix.lower() == ".mp4":
            cache_control = "public, max-age=604800, immutable"
        elif candidate.suffix.lower() in {".webp", ".jpg", ".jpeg", ".png", ".gif"}:
            cache_control = "public, max-age=86400"
        elif candidate.suffix.lower() in {".css", ".js"}:
            cache_control = "public, max-age=86400"
        else:
            cache_control = "no-cache"

        file_size = candidate.stat().st_size
        range_header = self.headers.get("Range")

        if range_header and range_header.startswith("bytes="):
            try:
                ranges = range_header[6:].split("-")
                start = int(ranges[0]) if ranges[0] else 0
                end = int(ranges[1]) if len(ranges) > 1 and ranges[1] else file_size - 1
                if start >= file_size or end >= file_size or start > end:
                    self.send_response(416)
                    self.send_header("Content-Range", f"bytes */{file_size}")
                    self.end_headers()
                    return

                length = end - start + 1
                with candidate.open("rb") as f:
                    f.seek(start)
                    chunk = f.read(length)

                self.send_response(206)
                self.send_header("Content-Type", content_type)
                self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
                self.send_header("Content-Length", str(length))
                self.send_header("Accept-Ranges", "bytes")
                self.send_header("Cache-Control", cache_control)
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(chunk)
                return
            except Exception:
                pass

        body = candidate.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Cache-Control", cache_control)
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

        if parsed_path.path in {"/", "/index.html"}:
            self._send_static(FRONTEND_DIR / "index.html")
            return

        if parsed_path.path in {"/favicon.ico", "/favicon.svg"}:
            fav = FRONTEND_DIR / "favicon.svg"
            if fav.exists():
                self._send_static(fav)
                return

        if parsed_path.path in {"/gallery", "/gallery.html", "/about", "/about.html", "/contact", "/contact.html"}:
            self._send_static(FRONTEND_DIR / "index.html")
            return

        raw_path = unquote(parsed_path.path)
        if raw_path.startswith("/images/"):
            requested_path = raw_path.removeprefix("/images/")
            safe_path = (IMAGES_DIR / requested_path).resolve()
            if safe_path.is_relative_to(IMAGES_DIR.resolve()) and safe_path.is_file():
                self._send_static(safe_path)
                return

            # Graceful fallbacks if display/ or thumbs/ have not been generated yet
            # e.g., Landscape/display/foo.webp -> optimized/Landscape/foo.webp -> Landscape/foo.jpg
            parts = Path(requested_path).parts
            if len(parts) >= 3 and parts[1] in {"display", "thumbs"}:
                section, variant, filename = parts[0], parts[1], Path(parts[2]).stem
                fallback_paths = [
                    IMAGES_DIR / ("optimized" if variant == "display" else "thumbs") / section / f"{filename}.webp",
                    IMAGES_DIR / section / f"{filename}.webp",
                    IMAGES_DIR / section / f"{filename}.jpg",
                    IMAGES_DIR / section / f"{filename}.jpeg",
                    IMAGES_DIR / section / f"{filename}.png"
                ]
                for fb in fallback_paths:
                    fb_res = fb.resolve()
                    if fb_res.is_relative_to(IMAGES_DIR.resolve()) and fb_res.is_file():
                        self._send_static(fb_res)
                        return

        requested_path = raw_path.lstrip("/")
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
                        "message": "Please fill in your name, email, and message before sending.",
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

            # Envío de correo en segundo plano para no bloquear la respuesta HTTP
            threading.Thread(
                target=send_contact_email,
                args=(name, email, message),
                daemon=True,
            ).start()

            self._send_json(
                200,
                {
                    "message": "Message sent successfully. I will get back to you soon.",
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
