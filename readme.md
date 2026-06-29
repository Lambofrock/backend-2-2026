# Backend 2 2026 - Gestion de Conciertos y Tickets

API backend desarrollada para una empresa dedicada a organizar conciertos, vender tickets y administrar eventos relacionados con bandas/artistas.

## Tematica elegida

El proyecto simula una plataforma de gestion de conciertos. Permite modelar usuarios, eventos y tickets, con una base preparada para:

- Registrar usuarios con roles.
- Administrar eventos musicales.
- Consultar y comprar tickets.
- Manejar sesiones.

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cookie-parser
- express-session

## Instalacion

1. Clonar el repositorio o descargar el proyecto.
2. Entrar a la carpeta del proyecto:

```bash
cd "backend 2 2026"
```

3. Instalar dependencias:

```bash
npm install
```

## Configuracion de variables de entorno

Crear un archivo `.env` en la raiz del proyecto con las siguientes variables:

```env
PORT=8080
MONGO_URL=mongodb://localhost:27017/nombre_de_tu_base
```

Variables utilizadas:

- `PORT`: puerto donde se ejecuta el servidor.
- `MONGO_URL`: URL de conexion a MongoDB.

## Como ejecutar

Para ejecutar en modo desarrollo con recarga automatica:

```bash
npm run dev
```

Para ejecutar en modo produccion:

```bash
npm start
```

Si la conexion es correcta, la consola mostrara mensajes indicando que el servidor inicio y que MongoDB fue conectado.

## Estructura de carpetas

```text
.
|-- src
|   |-- app.js
|   |-- config
|   |   |-- database.js
|   |   `-- env.js
|   |-- controllers
|   |   |-- event.controllers.js
|   |   |-- sessions.controllers.js
|   |   |-- ticket.controllers.js
|   |   `-- user.controllers.js
|   |-- models
|   |   |-- event.models.js
|   |   |-- ticket.model.js
|   |   `-- user.model.js
|   |-- routers
|   |   |-- event.routes.js
|   |   |-- sessions.router.js
|   |   |-- ticket.routes.js
|   |   `-- user.routes.js
|   `-- utils.js
|-- .env
|-- .gitignore
|-- package.json
|-- package-lock.json
`-- readme.md
```

## Rutas disponibles

### Health check

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| GET | `/api/health` | Verifica que el servidor este activo. |

### Usuarios

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| GET | `/api/user` | Obtiene todos los usuarios. |
| GET | `/api/user/:email` | Obtiene un usuario por email. |
| POST | `/api/user/:email` | Crea un usuario. |
| PUT | `/api/user/:email` | Actualiza un usuario por email. |

### Eventos

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| GET | `/api/event` | Obtiene todos los eventos. |
| GET | `/api/event/:eid` | Obtiene un evento por ID. |
| POST | `/api/event/:eid` | Crea un evento. |
| PUT | `/api/event/:eid` | Actualiza un evento por ID. |
| DELETE | `/api/event/:eid` | Elimina un evento por ID. |

### Tickets

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| GET | `/api/ticket` | Obtiene todos los tickets. |
| GET | `/api/ticket/:tid` | Obtiene un ticket por ID. |
| POST | `/api/ticket/:uid/eid` | Compra o genera un ticket para un usuario. |

### Sesiones

| Metodo | Ruta | Descripcion |
| --- | --- | --- |
| POST | `/api/sessions` | Crea una sesion. |
| GET | `/api/sessions` | Obtiene las sesiones. |
| DELETE | `/api/sessions/:sessionId` | Elimina una sesion por ID. |

## Modelos principales

### Usuario

- `email`: email unico y obligatorio.
- `password`: contrasena obligatoria.
- `role`: rol del usuario. Puede ser `admin`, `organizer` o `user`.

### Evento

- `name`: nombre del evento.
- `date`: fecha del evento.
- `place`: lugar del evento.
- `price`: precio del ticket.
- `capacity`: capacidad disponible.
- `status`: estado del evento.

### Ticket

- `user`: referencia al usuario.
- `event`: referencia al evento.

