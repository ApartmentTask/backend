import express, { Request, Response } from 'express';
import Apartment from '../models/Apartment';

const router = express.Router();

router.get('/apartments', async (req: Request, res: Response) => {
  try {
    const apartments = await Apartment.find();
    res.json(apartments);
  } catch (error) {
    console.error('Error fetching apartments:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/apartments/:id', async (req: Request, res: Response) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (!apartment) {
      return res.status(404).json({ message: 'Apartment not found' });
    }
    res.json(apartment);
  } catch (error) {
    console.error('Error fetching apartment details:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

 
router.post('/apartments', async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  try {
    const newApartment = new Apartment({
      name,
      description,
      price,
    });
    await newApartment.save();
    res.status(201).json(newApartment);
  } catch (error) {
    console.error('Error adding apartment:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
