import { Router } from "express";
import { GetExperienceController } from "../controllers/experience.controller";

const router = Router();

router.get("/", GetExperienceController);

export default router;