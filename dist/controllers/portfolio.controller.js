"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPortfoliosController = GetPortfoliosController;
exports.SearchPortfoliosController = SearchPortfoliosController;
exports.GetPortfolioByIdController = GetPortfolioByIdController;
const portfolio_service_1 = require("../services/portfolio.service");
function GetPortfoliosController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const portfolios = yield (0, portfolio_service_1.GetPortfoliosService)();
            res.status(200).send({
                message: `Get Portfolios Success`,
                data: portfolios,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function SearchPortfoliosController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const searchParams = req.query;
            const data = yield (0, portfolio_service_1.SearchPortfoliosService)(searchParams);
            res.status(200).send({
                success: true,
                data
            });
        }
        catch (error) {
            next(error);
        }
    });
}
function GetPortfolioByIdController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const portfolioId = parseInt((_a = req.params) === null || _a === void 0 ? void 0 : _a.id, 10);
            const data = yield (0, portfolio_service_1.GetPortfolioByIdServices)(portfolioId);
            res.status(200).send({
                success: true,
                data
            });
        }
        catch (error) {
            next(error);
        }
    });
}
