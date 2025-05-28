import express, { Application, Request, Response, NextFunction } from "express";
import UserRouter from './routers/user.router'
import ExperienceRouter from './routers/experience.router'
import PortfolioRouter from './routers/portfolio.router'

const port = 8010;
const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json('Welcome to Web portofolio api')
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