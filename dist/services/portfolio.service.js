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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPortfoliosService = GetPortfoliosService;
exports.SearchPortfoliosService = SearchPortfoliosService;
exports.GetPortfolioByIdServices = GetPortfolioByIdServices;
const db_1 = __importDefault(require("../config/db"));
function GetPortfoliosService() {
    return __awaiter(this, void 0, void 0, function* () {
        const portfolios = yield db_1.default.experiences.findMany();
        if (!portfolios)
            throw new Error("No portfolios yet");
        return portfolios;
    });
}
function SearchPortfoliosService(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { project_title, project_start_date, project_end_date } = params;
            const filters = {};
            if (project_title) {
                filters.project_title = project_title;
            }
            if (project_start_date) {
            }
            if (project_end_date) {
            }
            const portfolios = yield db_1.default.portfolios.findMany({
                where: Object.assign({}, filters),
                include: {
                    portfolio_collaborators: true,
                },
            });
            if (!portfolios)
                throw new Error(`portfolios not found`);
            return portfolios;
        }
        catch (error) {
            throw error;
        }
    });
}
function GetPortfolioByIdServices(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const portfolio = yield db_1.default.portfolios.findUnique({
                where: { id: params },
                include: {
                    portfolio_collaborators: {
                        include: {
                            users: true, // This will pull user details from the users table
                        },
                    },
                },
            });
            if (!portfolio)
                throw new Error(`portfolios not found`);
            return portfolio;
        }
        catch (error) {
            throw error;
        }
    });
}
