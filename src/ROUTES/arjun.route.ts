// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import Language from '../db/models/arjun';

const languageRoute = express.Router();

languageRoute.use(express.json());

languageRoute.get('/lange', async (req: Request, res: Response) => {
  try {
    const language = await Language.findAll();
    res.json(language);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

languageRoute.post('/lang', async (req: Request, res: Response) => {
  const {id, languagename, languagecode} = req.body;

  try {
    const newHospital = await Language.create({id, languagename, languagecode});
    res.status(201).json(newHospital);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

languageRoute.put('/langput/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { languagename, languagecode } = req.body;

  try {
    const languageToUpdate = await Language.findByPk(id);

    if (!languageToUpdate) {
      return res.status(404).json({ error: 'Language not found' });
    }

    languageToUpdate.languagename = languagename;
    languageToUpdate.languagecode = languagecode;
    
    await languageToUpdate.save();
    res.json(languageToUpdate);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

languageRoute.delete('/langdel/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const languageToDelete = await Language.findByPk(id);

    if (!languageToDelete) {
      return res.status(404).json({ error: 'Language not found' });
    }

    await languageToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});





export default languageRoute;
