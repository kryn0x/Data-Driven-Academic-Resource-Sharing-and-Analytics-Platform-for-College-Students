import express from 'express';
import upload from '../middleware/upload.js';
import Resource from '../models/Resource.js';
import { extractTextFromPDF, analyzeKeywords } from '../utils/pdfProcessor.js';

const router = express.Router();

// POST /api/resources - Upload PDF with metadata
router.post('/', upload.single('pdf'), async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'PDF file is required' });
    }

    // Validate required metadata fields
    const { title, subject, year, type } = req.body;
    if (!title || !subject || !year || !type) {
      return res.status(400).json({ 
        error: 'Missing required fields: title, subject, year, type' 
      });
    }

    // Validate year
    const yearNum = parseInt(year);
    if (isNaN(yearNum) || yearNum < 1900 || yearNum > 2100) {
      return res.status(400).json({ 
        error: 'Year must be a valid number between 1900 and 2100' 
      });
    }

    // Extract text from PDF and analyze keywords
    const extractedText = await extractTextFromPDF(req.file.path);
    const keywords = analyzeKeywords(extractedText);

    // Create new resource
    const resource = new Resource({
      title: title.trim(),
      subject: subject.trim(),
      year: yearNum,
      type: type.trim(),
      filename: req.file.filename,
      keywords: keywords,
      fileSize: req.file.size
    });

    // Save to database
    const savedResource = await resource.save();

    res.status(201).json({
      message: 'Resource uploaded successfully',
      resource: savedResource
    });

  } catch (error) {
    console.error('Upload error:', error.message);
    
    // Handle multer errors
    if (error.message === 'Only PDF files are allowed') {
      return res.status(400).json({ error: 'Only PDF files are allowed' });
    }
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }

    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/resources - Get all resources
router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find().sort({ uploadDate: -1 });
    res.json(resources);
  } catch (error) {
    console.error('Get resources error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/resources/:id - Get specific resource
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid resource ID format' });
    }

    const resource = await Resource.findById(id);
    
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    res.json(resource);
  } catch (error) {
    console.error('Get resource by ID error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;