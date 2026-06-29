import { Router } from "express";
import {
  createSession,
  getSessions,
  deleteSession,
} from "../controllers/sessions.controllers.js";

const router = Router();

router.post("/", createSession);

router.get("/", getSessions);

router.delete("/:sessionId", deleteSession);

export default router;
