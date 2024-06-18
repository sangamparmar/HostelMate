import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    if (!db) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }
    console.log(`Connecting to database: ${db}`);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
