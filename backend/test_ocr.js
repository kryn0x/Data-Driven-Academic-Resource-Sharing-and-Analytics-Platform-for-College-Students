import { extractTextFromPDF, analyzeKeywords } from './utils/pdfProcessor.js';
import path from 'path';

const testOCR = async () => {
  try {
    console.log('🧪 Testing OCR functionality...\n');
    
    // Test with one of the uploaded PDFs
    const testFile = 'uploads/1775060372705-Database-Management-System.pdf';
    const filePath = path.join(process.cwd(), testFile);
    
    console.log(`📄 Testing file: ${testFile}\n`);
    
    // Extract text
    const text = await extractTextFromPDF(filePath);
    
    console.log('\n📝 Extracted text preview (first 500 chars):');
    console.log(text.substring(0, 500));
    console.log(`\n📊 Total text length: ${text.length} characters\n`);
    
    // Analyze keywords
    const keywords = analyzeKeywords(text);
    
    console.log('🔑 Top 5 Keywords:', keywords);
    console.log('\n✅ Test completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error(error.stack);
  }
};

testOCR();
