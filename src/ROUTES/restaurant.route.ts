// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import Restaurant from '../db/models/restaurant';

const restaurantRoute = express.Router();

restaurantRoute.use(express.json());

restaurantRoute.get('/rest', async (req: Request, res: Response) => {
  try {
    const language = await Restaurant.findAll();
    res.json(language);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

restaurantRoute.post('/res', async (req: Request, res: Response) => {
  const { Rid, name, Address, contactnumber } = req.body;

  try {
    const newUser = await Restaurant.create({
      Rid,
      name,
      Address,
      contactnumber
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});


export default restaurantRoute;
