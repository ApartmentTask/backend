// import { MongoClient } from 'mongodb';
// import mongoose, { ConnectOptions } from 'mongoose';
// require('dotenv').config();

// const connectDB = async () => {
//   //'mongodb://localhost:27017/Realestate'
  
//     await mongoose.connect(process.env.MONGO_URL?.toString() ?? "");
//     const db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function () {
//       console.log('Connected to MongoDB');
//     });
// };

// export default connectDB;
// const MONGO_URL="mongodb+srv://khaledelshabrawy:SgzcZQ8KLUgKipcp@apartments.e6zxqbs.mongodb.net/RealestateDatabase?retryWrites=true&w=majority&appName=Apartments"

// const client = new MongoClient(MONGO_URL);

// const connectDBAtlas=async function connectToMongo() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// }
// export default connectDBAtlas;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://khaledelshabrawy:khaledPass@apartments.e6zxqbs.mongodb.net/RealestateDatabase?retryWrites=true&w=majority&appName=Apartments";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const connectDBAtlas=async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);
export default connectDBAtlas;
