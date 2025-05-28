import express, { Application, Request, Response, NextFunction } from "express";

const port = 8010;
const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json('Welcome to Express API')
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({
        success: false,
        message: err.message,
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});