import { Router } from "express";
import { GetPortfolioByIdController, GetPortfoliosController, SearchPortfoliosController } from "../controllers/portfolio.controller";

const router = Router();

router.get("/", GetPortfoliosController);
router.get("/search", SearchPortfoliosController);
router.get("/:id", GetPortfolioByIdController)

export default router;