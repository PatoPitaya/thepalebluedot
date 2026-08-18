# Meridian Prompt & Vake

Aplicación web modular inspirada en el HTML original de Meridian, con:

- frontend como capa visual React (via CDN) y estilos separados
- backend Python para servir la interfaz y exponer las API /api/compose y /api/contact
- la vista original en meridian.html permanece intacta

## Estructura

- frontend/index.html: entrada HTML de la experiencia
- frontend/app.js: lógica React y la interacción con el prompt y el vake
- frontend/styles.css: estilos visuales de la experiencia
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

- El panel de la izquierda conserva el estilo de la experiencia de Meridian.
- El panel derecho permite escribir un prompt y generar un vake.
- El backend responde en /api/compose con un JSON de ejemplo.
- El formulario de contacto envía nombre, correo y mensaje a /api/contact.
- La vista de contacto muestra un panel interno con las últimas consultas guardadas desde /api/contact.
