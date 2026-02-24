import pdfParse from 'pdf-parse';
import fs from 'fs';

// Simple stopwords list
const stopwords = [
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
  'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
  'will', 'would', 'could', 'should', 'may', 'might', 'can', 'must', 'shall',
  'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them',
  'this', 'that', 'these', 'those', 'what', 'which', 'who', 'when', 'where', 'why', 'how'
];

// Extract text from PDF
export const extractTextFromPDF = async (filePath) => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text;
  } catch (error) {
    console.error('PDF text extraction error:', error.message);
    return '';
  }
};

// Analyze keywords from text
export const analyzeKeywords = (text) => {
  if (!text || text.trim().length === 0) {
    return [];
  }

  // Convert to lowercase and extract words
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
    .split(/\s+/)
    .filter(word => word.length > 2) // Filter out very short words
    .filter(word => !stopwords.includes(word)); // Remove stopwords

  // Count word frequency
  const wordCount = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  // Sort by frequency and get top 5
  const sortedWords = Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([word]) => word);

  return sortedWords;
};