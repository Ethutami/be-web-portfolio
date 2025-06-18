import prisma from "../config/db";
import { ISearchPortfolio } from "../interfaces/portfolio.interface";

export async function GetPortfoliosService() {
    const portfolios = await prisma.experiences.findMany();
    if (!portfolios) throw new Error("No portfolios yet");
    return portfolios;
}

export async function SearchPortfoliosService(params: ISearchPortfolio) {
    try {
        const { project_title, project_start_date, project_end_date } = params
        const filters: any = {};

        if (project_title) {
            filters.project_title = project_title;
        }

        if (project_start_date) {
        }

        if (project_end_date) {
        }

        const portfolios = await prisma.portfolios.findMany({
            where: {
                ...filters
            },
            include: {
                portfolio_collaborators: true,
            },
        });

        if (!portfolios) throw new Error(`portfolios not found`)
        return portfolios
    } catch (error) {
        throw error
    }
}

export async function GetPortfolioByIdServices(params: number) {
    try {
        const portfolio = await prisma.portfolios.findUnique({
            where: { id: params },
            include: {
                portfolio_collaborators: {
                    include: {
                        users: true, // This will pull user details from the users table
                    },
                },
            },
        });

        if (!portfolio) throw new Error(`portfolios not found`)
        return portfolio
    } catch (error) {
        throw error
    }

}