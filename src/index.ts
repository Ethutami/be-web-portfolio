import express, { Application, Request, Response, NextFunction } from "express";
import cors from 'cors'
import UserRouter from './routers/user.router'
import ExperienceRouter from './routers/experience.router'
import PortfolioRouter from './routers/portfolio.router'
import { FE_URL, PORT, WEB_PRODUCTION_URL } from "./config";

const port = PORT || 8010;
const app: Application = express();

app.use(express.json());

const allowedOrigins = [WEB_PRODUCTION_URL, FE_URL];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true // optional, for cookies
}));

// app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json('Welcome to Web portfolio api')
})

app.use("/api/users", UserRouter);
app.use("/api/experiences", ExperienceRouter);
app.use("/api/portfolios", PortfolioRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({
        success: false,
        message: err.message,
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});