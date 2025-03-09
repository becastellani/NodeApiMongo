import { Router } from "express";

import { listUsers, createUser, updateUser, replaceUser, deleteUser } from "../controllers/userController.js";

const router = Router();

router.get("/", listUsers)
router.post("/", createUser)
router.put("/:id", updateUser)
router.patch("/:id", replaceUser)
router.delete("/:id", deleteUser)

export default router;