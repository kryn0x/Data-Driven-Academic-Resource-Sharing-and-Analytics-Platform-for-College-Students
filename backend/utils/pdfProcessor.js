import pdfParse from 'pdf-parse';
import fs from 'fs';
import path from 'path';

// Simple stopwords list
const stopwords = [
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
  'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
  'will', 'would', 'could', 'should', 'may', 'might', 'can', 'must', 'shall',
  'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them',
  'this', 'that', 'these', 'those', 'what', 'which', 'who', 'when', 'where', 'why', 'how',
  // Generic academic words to filter out
  'exam', 'paper', 'question', 'assignment', 'test', 'quiz', 'marks', 'total', 'name', 'date'
];

// Extract text from first page only (faster and more reliable)
export const extractTextFromPDF = async (filePath, metadata = {}) => {
  try {
    console.log('📄 Using first-page extraction strategy');
    
    const dataBuffer = fs.readFileSync(filePath);
    
    // Extract only first page
    const data = await pdfParse(dataBuffer, {
      max: 1 // Process only first page
    });
    
    const extractedText = data.text.trim();
    console.log(`📊 Extracted ${extractedText.length} characters from first page`);

    // Check if extracted text is sufficient
    if (extractedText.length >= 100) {
      console.log('✅ First-page extraction successful');
      return extractedText;
    }

    // Enhanced fallback for weak text extraction
    console.log('⚠️ Weak text extraction (< 100 characters)');
    console.log('🔄 Enhanced fallback applied');
    
    // Combine extracted text with metadata
    const { filename = '', title = '', subject = '', type = '' } = metadata;
    
    // Extract meaningful words from filename (remove extension and timestamps)
    const cleanFilename = path.basename(filename, '.pdf')
      .replace(/^\d+-/, '') // Remove timestamp prefix
      .replace(/[_-]/g, ' '); // Replace underscores/hyphens with spaces
    
    // Combine all available information
    const combinedText = [
      extractedText,
      cleanFilename,
      title,
      subject,
      type
    ].filter(Boolean).join(' ');
    
    console.log(`📊 Combined text length: ${combinedText.length} characters`);
    console.log('✅ Fallback text prepared');
    
    return combinedText;
    
  } catch (error) {
    console.error('❌ PDF text extraction error:', error.message);
    
    // Last resort: use metadata only
    const { filename = '', title = '', subject = '', type = '' } = metadata;
    const cleanFilename = path.basename(filename, '.pdf').replace(/^\d+-/, '').replace(/[_-]/g, ' ');
    return [cleanFilename, title, subject, type].filter(Boolean).join(' ');
  }
};

// Analyze keywords from text
export const analyzeKeywords = (text) => {
  if (!text || text.trim().length === 0) {
    console.log('⚠️ No text available for keyword analysis');
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

  console.log(`✅ Extracted ${sortedWords.length} keywords:`, sortedWords);
  return sortedWords;
};