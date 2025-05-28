import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GetAllUserService, GetContactService } from "../services/user.service";

export async function GetAllUserController(req: VercelRequest, res: VercelResponse) {
    try {
        const users = await GetAllUserService();

        res.status(200).json({
            message: `Get all user success`,
            data: users,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Internal Server Error',
        });
    }
}

export async function GetContactController(req: VercelRequest, res: VercelResponse) {
    try {
        const contact = await GetContactService();

        res.status(200).json({
            message: `Get contact success`,
            data: contact,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'Internal Server Error',
        });
    }
}
