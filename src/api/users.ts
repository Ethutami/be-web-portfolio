import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GetAllUserController, GetContactController } from '../controllers/user.controller';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { method, url } = req;

    if (method === 'GET') {
        if (url === '/api/users' || url === '/api/users/') {
            return GetAllUserController(req, res);
        } else if (url === '/api/users/contact') {
            return GetContactController(req, res);
        } else {
            return res.status(404).json({ message: 'Route not found' });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
