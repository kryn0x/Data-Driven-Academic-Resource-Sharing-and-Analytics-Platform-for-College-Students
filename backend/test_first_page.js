import { extractTextFromPDF, analyzeKeywords } from './utils/pdfProcessor.js';
import path from 'path';

const testFirstPageExtraction = async () => {
  try {
    console.log('🧪 Testing first-page extraction strategy...\n');
    
    // Test 1: Regular PDF
    console.log('=== TEST 1: Regular PDF ===');
    const regularPdf = 'uploads/1775057337861-Assignment 1.pdf';
    const regularPath = path.join(process.cwd(), regularPdf);
    
    const text1 = await extractTextFromPDF(regularPath, {
      filename: 'Assignment 1.pdf',
      title: 'Operating System Assignment',
      subject: 'Operating Systems',
      type: 'Assignment'
    });
    
    console.log(`\n📝 Text preview (first 300 chars):`);
    console.log(text1.substring(0, 300));
    console.log(`\n📊 Total length: ${text1.length} characters`);
    
    const keywords1 = analyzeKeywords(text1);
    console.log('🔑 Keywords:', keywords1);
    
    // Test 2: Scanned/weak PDF
    console.log('\n\n=== TEST 2: Another Assignment PDF ===');
    const scannedPdf = 'uploads/1771958502766-Assignment 4.pdf';
    const scannedPath = path.join(process.cwd(), scannedPdf);
    
    const text2 = await extractTextFromPDF(scannedPath, {
      filename: '1771958502766-Assignment 4.pdf',
      title: 'Assignment 4',
      subject: 'Computer Science',
      type: 'Assignment'
    });
    
    console.log(`\n📝 Text preview (first 300 chars):`);
    console.log(text2.substring(0, 300));
    console.log(`\n📊 Total length: ${text2.length} characters`);
    
    const keywords2 = analyzeKeywords(text2);
    console.log('🔑 Keywords:', keywords2);
    
    console.log('\n✅ All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error(error.stack);
  }
};

testFirstPageExtraction();
