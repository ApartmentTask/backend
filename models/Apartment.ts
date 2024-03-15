import mongoose, { Document } from 'mongoose';

export interface ApartmentType extends Document {
  name: string;
  description: string;
  price: number;
}

const ApartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const Apartment = mongoose.model<ApartmentType>('Apartment', ApartmentSchema);

export default Apartment;
