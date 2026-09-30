# The Pale Blue Dot

Portfolio fotográfico servido por Python, con una experiencia visual de pantalla completa y formulario de contacto.

La entrada activa es `frontend/index.html`, que contiene la experiencia visual, galería, visor y contacto.
La implementación React de `frontend/src/` y los archivos `app.js`/`styles.css` se conservan como prototipo anterior y no son la entrada servida por `backend/app.py`.

## Estructura

- frontend/index.html: entrada activa de la experiencia
- backend/app.py: servidor HTTP Python que sirve la app y la API

## Requisitos

- Python 3.10+ (3.14 también funciona para esta implementación)

## Arranque

```bash
cd D:\WebSite\Thepalebluedot
python backend/app.py
```

Luego abre en el navegador:

- http://127.0.0.1:8000/
- http://127.0.0.1:8000/health para comprobar la API

## Funcionalidad

- El formulario de contacto envía nombre, correo y mensaje a /api/contact.
- Las consultas se guardan de forma privada en `backend/contact_messages.jsonl` y no se exponen mediante una API pública.
