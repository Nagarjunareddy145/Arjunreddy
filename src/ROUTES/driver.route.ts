// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import Driver from '../db/models/driver';

const driverRoute = express.Router();

driverRoute.use(express.json());

driverRoute.get('/drv', async (req: Request, res: Response) => {
  try {
    const language = await Driver.findAll();
    res.json(language);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

driverRoute.post('/dri', async (req: Request, res: Response) => {
  const {Did, fullname, email,password,contactnumber,vechiclenumber} = req.body;

  try {
    const newUser = await Driver.create({Did, fullname, email, password, contactnumber,vechiclenumber});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});



export default driverRoute;
