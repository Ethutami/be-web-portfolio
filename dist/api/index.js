"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Welcome to Web portfolio api' });
    }
    else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
