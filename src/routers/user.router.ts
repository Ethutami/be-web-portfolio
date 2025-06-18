import { Router } from "express";
import { GetAllUserController, GetContactController, GetUserByIdController } from "../controllers/user.controller";

const router = Router();

router.get("/", GetAllUserController);
router.get("/contact", GetContactController);
router.get('/:id', GetUserByIdController)

export default router;