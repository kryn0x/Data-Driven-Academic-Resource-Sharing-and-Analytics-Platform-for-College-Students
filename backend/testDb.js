import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import Resource from './models/Resource.js';

dotenv.config();

const checkDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const resources = await Resource.find().sort({ uploadDate: -1 }).limit(5);
    fs.writeFileSync('db_out.txt', JSON.stringify(resources, null, 2), 'utf8');
    process.exit(0);
  } catch (error) {
    fs.writeFileSync('db_out.txt', 'Error: ' + error.message, 'utf8');
    process.exit(1);
  }
};

checkDB();
