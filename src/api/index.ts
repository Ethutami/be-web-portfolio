import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'GET') {
        res.status(200).json('Welcome to Web portofolio api');
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
