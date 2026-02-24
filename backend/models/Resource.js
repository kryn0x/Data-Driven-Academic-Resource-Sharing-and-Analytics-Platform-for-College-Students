import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true,
    min: 1900,
    max: 2100
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  filename: {
    type: String,
    required: true
  },
  keywords: [{
    type: String
  }],
  uploadDate: {
    type: Date,
    default: Date.now
  },
  fileSize: {
    type: Number
  }
});

export default mongoose.model('Resource', resourceSchema);