import { Router } from "express";
import { getAllTickets } from "../controllers/ticket.controllers.js";
import { purchaseTicket } from "../controllers/ticket.controllers.js";
import { getTicketById } from "../controllers/ticket.controllers.js";

const router = Router();

router.get("/", getAllTickets);
router.get("/:tid",getTicketById);
router.post("/:uid/eid",purchaseTicket);

export default router;