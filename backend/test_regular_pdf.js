import { extractTextFromPDF, analyzeKeywords } from './utils/pdfProcessor.js';
import path from 'path';

const testRegularPDF = async () => {
  try {
    console.log('🧪 Testing regular PDF extraction...\n');
    
    // Test with Assignment 1 PDF
    const testFile = 'uploads/1775057337861-Assignment 1.pdf';
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

testRegularPDF();
