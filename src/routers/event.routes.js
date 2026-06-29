import { Router } from "express";
import { getAll } from "../controllers/event.controllers.js";
import { getEvent } from "../controllers/event.controllers.js";
import { createEvent } from "../controllers/event.controllers.js";
import { updateEvent } from "../controllers/event.controllers.js";
import { deleteEvent } from "../controllers/event.controllers.js";

const router = Router();

router.get("/", getAll);
router.get("/:eid", getEvent);
router.post("/:eid", createEvent);
router.put("/:eid", updateEvent);
router.delete("/:eid", deleteEvent);

export default router;
