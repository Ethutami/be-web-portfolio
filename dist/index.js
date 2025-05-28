"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const experience_router_1 = __importDefault(require("./routers/experience.router"));
const portfolio_router_1 = __importDefault(require("./routers/portfolio.router"));
const port = 8010;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.status(200).json('Welcome to Web portofolio api');
});
app.use("/api/users", user_router_1.default);
app.use("/api/experiences", experience_router_1.default);
app.use("/api/portfolios", portfolio_router_1.default);
app.use((err, req, res, next) => {
    res.status(400).json({
        success: false,
        message: err.message,
    });
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
