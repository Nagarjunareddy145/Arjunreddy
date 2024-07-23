// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import Categories from '../db/models/categories'; // Assuming 'service' is the correct model name

const categoriesRoute = express.Router();

categoriesRoute.use(express.json());

categoriesRoute.get('/cate', async (req: Request, res: Response) => {
  try {
    const categories = await Categories.findAll(); // Use Service.findAll() instead of Service
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

categoriesRoute.post('/cat', async (req: Request, res: Response) => {
  const { cid, cname,description } = req.body;

  try {
    const newCategories = await Categories.create({cid, cname,description }); // Use Service.create() instead of service.create()
    res.status(201).json(newCategories);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default categoriesRoute;
