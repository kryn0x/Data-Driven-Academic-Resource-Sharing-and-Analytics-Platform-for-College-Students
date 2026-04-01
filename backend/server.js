import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import resourceRoutes from './routes/resources.js';
import authRoutes from './routes/auth.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file serving for uploads
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/resources', resourceRoutes);
app.use('/api/auth', authRoutes);

// Basic health check
app.get('/', (req, res) => {
  res.json({ message: 'Academic Resource Sharing API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});