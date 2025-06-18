import { NextFunction, Request, Response } from "express";
import { GetAllUserService, GetContactService, GetUserByIdServices } from "../services/user.service";

export async function GetAllUserController(req: Request, res: Response, next: NextFunction
) {
    try {
        const users = await GetAllUserService();

        res.status(200).send({
            message: `Get all user success`,
            data: users,
        });
    } catch (err) {
        next(err);
    }
}

export async function GetContactController(req: Request, res: Response, next: NextFunction
) {
    try {
        const contact = await GetContactService();

        res.status(200).send({
            message: `Get contact success`,
            data: contact,
        });
    } catch (err) {
        next(err);
    }
}

export async function GetUserByIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = parseInt(req.params?.id, 10);
        const data = await GetUserByIdServices(userId)

        res.status(200).send({
            success: true,
            data
        })
    } catch (error) {
        next(error)
    }
}