import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.error('Full error:', error);
    console.error('MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');
    // Don't exit, let the server run even if DB connection fails
    // process.exit(1);
  }
};

export default connectDB;