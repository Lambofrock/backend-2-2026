import express from "express";
import { connectDB } from "./config/database.js";
import {env} from "./config/env.js"

import userRouter from "./routers/user.routes.js";
import ticketRouter from "./routers/ticket.routes.js";
import eventRouter from "./routers/event.routes.js";
import sessionRouter from "./routers/sessions.router.js"


const app = express();
 app.use("/api/user", userRouter)
 app.use("/api/event", eventRouter)
 app.use("/api/ticket", ticketRouter)
 app.use("/api/sessions", sessionRouter)

 app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Servidor activo"
  });
});

app.listen(env.PORT, () => {
  connectDB().then(
    console.log("conectado a mongo")
  )
  console.log(`iniciado servidor en puerto ${env.PORT}`);
  console.log("sin problemas")
});
