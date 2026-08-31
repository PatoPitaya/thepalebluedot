import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from backend.app import MeridianHandler
from http.server import ThreadingHTTPServer

if __name__ == '__main__':
    port = int(os.environ.get('PORT', '8000'))
    httpd = ThreadingHTTPServer(('127.0.0.1', port), MeridianHandler)
    print(f'Listening on http://127.0.0.1:{port}')
    httpd.serve_forever()
