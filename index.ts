import express from 'express';
import connectDBAtlas from './db';
import apartmentRoutes from './routes/apartments';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors(
  // {
  //   origin: 'http://localhost:3001'
  // }
  ));

app.use(express.json());

const MONGO_URL = "mongodb+srv://khaledelshabrawy:khaledPass@apartments.e6zxqbs.mongodb.net/RealestateDatabase?retryWrites=true&w=majority&appName=Apartments";
app.use('/api', apartmentRoutes);
const PORT = process.env.PORT || 3000;


mongoose.connect(MONGO_URL).then(async()=>{
  console.log('db is connected to mongoose atlas successfully')

  
app.listen(PORT,()=>{
  console.log("connected succsefully to the port")
})

}).catch((err)=>{ 
console.log(err)
})

