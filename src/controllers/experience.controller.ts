import { NextFunction, Request, Response } from "express";
import { GetExperiencesService } from "../services/experience.service";

export async function GetExperienceController(req: Request, res: Response, next: NextFunction
) {
    try {
        const experiences = await GetExperiencesService();

        res.status(200).send({
            message: `Get Experiences Success`,
            data: experiences,
        });
    } catch (err) {
        next(err);
    }
}