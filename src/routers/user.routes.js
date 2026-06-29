import { Router } from "express";
import { getAllUsers } from "../controllers/user.controllers.js";
import { getUser } from "../controllers/user.controllers.js";
import { updateUser } from "../controllers/user.controllers.js";
import { createUser } from "../controllers/user.controllers.js";


const router = Router();


router.get("/", getAllUsers);
router.get("/:email",getUser);
router.put("/:email",updateUser);
router.post("/:email",createUser)

export default router;