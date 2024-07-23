// ../routes/loginRoutes.ts (or any appropriate file)

import express, { Request, Response } from 'express';
import  LoginAttributes  from '../db/models/ttt'; // Adjust the import path as per your project structure
import Login from '../db/models/ttt';

const loginrouter = express.Router();

// POST /api/login
loginrouter.post('/login', async (req: Request, res: Response) => {
    try {
        // Extract data from request body
        const { login, password } = req.body;

        // Validate input (basic validation example)
        if (!login || !password) {
            return res.status(400).json({ error: 'Login and password are required' });
        }

        // Create new login entry in database using Sequelize
        const newLogin: LoginAttributes = await Login.create({
            login,
            password,
        });

        // Respond with the newly created login entry
        res.status(201).json(newLogin);
    } catch (error) {
        console.error('Error creating login:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default loginrouter;
