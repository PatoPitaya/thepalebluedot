import os
import json
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FRONTEND = ROOT / 'frontend'

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"status":"ok"}')
            return

        if self.path in ('/', '/index.html'):
            path = FRONTEND / 'index.html'
        else:
            rel = self.path.lstrip('/')
            path = FRONTEND / rel

        if path.exists() and path.is_file():
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8' if path.suffix == '.html' else 'text/css; charset=utf-8' if path.suffix == '.css' else 'application/javascript; charset=utf-8')
            self.end_headers()
            self.wfile.write(path.read_bytes())
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'not found')

    def do_POST(self):
        if self.path != '/api/compose':
            self.send_response(404)
            self.end_headers()
            return

        length = int(self.headers.get('Content-Length', '0'))
        body = self.rfile.read(length).decode('utf-8') if length else '{}'
        payload = json.loads(body or '{}')
        prompt = (payload.get('prompt') or '').strip()

        response = {
            'message': 'Vake preparado con éxito.' if prompt else 'El prompt está vacío.',
            'vake': {
                'title': 'Vake · Ruta de inspiración',
                'summary': f'Tu idea de viaje se ha convertido en un esquema envolvente: {prompt}' if prompt else 'Prueba con una idea más concreta para obtener un resultado más útil.',
                'highlights': ['Ritmo pausado', 'Puntos de descanso', 'Narrativa visual']
            }
        }
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))

    def log_message(self, format, *args):
        return

if __name__ == '__main__':
    port = int(os.environ.get('PORT', '8000'))
    httpd = ThreadingHTTPServer(('127.0.0.1', port), Handler)
    print(f'Listening on http://127.0.0.1:{port}')
    httpd.serve_forever()
