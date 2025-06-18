import { NextFunction, Request, Response } from "express";
import { GetPortfolioByIdServices, GetPortfoliosService, SearchPortfoliosService } from "../services/portfolio.service";
import { ISearchPortfolio } from "../interfaces/portfolio.interface";

export async function GetPortfoliosController(req: Request, res: Response, next: NextFunction
) {
    try {
        const portfolios = await GetPortfoliosService();

        res.status(200).send({
            message: `Get Portfolios Success`,
            data: portfolios,
        });
    } catch (err) {
        next(err);
    }
}

export async function SearchPortfoliosController(req: Request, res: Response, next: NextFunction) {
    try {
        const searchParams = req.query as unknown as ISearchPortfolio;
        const data = await SearchPortfoliosService(searchParams)

        res.status(200).send({
            success: true,
            data
        })
    } catch (error) {
        next(error)
    }

}
export async function GetPortfolioByIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const portfolioId = parseInt(req.params?.id, 10);
        const data = await GetPortfolioByIdServices(portfolioId)

        res.status(200).send({
            success: true,
            data
        })
    } catch (error) {
        next(error)
    }
}