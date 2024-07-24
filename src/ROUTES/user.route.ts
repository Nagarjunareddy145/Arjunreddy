// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import User from '../db/models/user';

const userRoute = express.Router();

userRoute.use(express.json());

userRoute.get('/use', async (req: Request, res: Response) => {
  try {
    const language = await User.findAll();
    res.json(language);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

userRoute.post('/usr', async (req: Request, res: Response) => {
  const {userid, fullname, email,password,contactnumber} = req.body;

  try {
    const newUser = await User.create({userid, fullname, email, password, contactnumber});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});



export default userRoute;
