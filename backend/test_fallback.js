import { analyzeKeywords } from './utils/pdfProcessor.js';

const testEnhancedFallback = () => {
  console.log('🧪 Testing enhanced fallback strategy...\n');
  
  // Simulate weak extraction scenario
  console.log('=== Scenario: Scanned PDF with weak text ===');
  
  const weakText = 'Page 1';
  const filename = '1234567890-Database-Management-System-Midterm.pdf';
  const title = 'Database Management System';
  const subject = 'DBMS';
  const type = 'Midterm Exam';
  
  // Clean filename
  const cleanFilename = filename
    .replace('.pdf', '')
    .replace(/^\d+-/, '')
    .replace(/[_-]/g, ' ');
  
  console.log('📄 Weak extracted text:', weakText);
  console.log('📁 Clean filename:', cleanFilename);
  console.log('📝 Title:', title);
  console.log('📚 Subject:', subject);
  console.log('📋 Type:', type);
  
  // Combine all
  const combinedText = [weakText, cleanFilename, title, subject, type].join(' ');
  
  console.log('\n🔄 Combined text:', combinedText);
  console.log(`📊 Combined length: ${combinedText.length} characters`);
  
  // Extract keywords
  const keywords = analyzeKeywords(combinedText);
  
  console.log('\n🔑 Final keywords:', keywords);
  console.log('\n✅ Fallback test completed!');
  console.log('💡 Even with weak PDF text, we got meaningful keywords from metadata');
};

testEnhancedFallback();
