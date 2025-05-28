import { Router } from "express";
import { GetPortfoliosController, SearchPortfoliosController } from "../controllers/portfolio.controller";

const router = Router();

router.get("/", GetPortfoliosController);
router.get("/search", SearchPortfoliosController);

export default router;