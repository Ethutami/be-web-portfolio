"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const portfolio_controller_1 = require("../controllers/portfolio.controller");
const router = (0, express_1.Router)();
router.get("/", portfolio_controller_1.GetPortfoliosController);
router.get("/search", portfolio_controller_1.SearchPortfoliosController);
router.get("/:id", portfolio_controller_1.GetPortfolioByIdController);
exports.default = router;
