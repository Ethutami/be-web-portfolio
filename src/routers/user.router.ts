import { Router } from "express";
import { GetAllUserController, GetContactController } from "../controllers/user.controller";

const router = Router();

router.get("/", GetAllUserController);
router.get("/contact", GetContactController);

export default router;