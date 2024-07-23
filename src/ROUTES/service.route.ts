// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import Service from '../db/models/service'; // Assuming 'service' is the correct model name

const serviceRoute = express.Router();

serviceRoute.use(express.json());

serviceRoute.get('/serv', async (req: Request, res: Response) => {
  try {
    const services = await Service.findAll(); // Use Service.findAll() instead of Service
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

serviceRoute.post('/ser', async (req: Request, res: Response) => {
  const { id, servicetype } = req.body;

  try {
    const newService = await Service.create({ id, servicetype }); // Use Service.create() instead of service.create()
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default serviceRoute;
