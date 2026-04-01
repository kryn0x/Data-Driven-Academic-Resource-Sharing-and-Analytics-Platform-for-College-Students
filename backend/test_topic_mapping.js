import { generateStudySuggestions } from './utils/topicMapper.js';

const testTopicMapping = () => {
  console.log('🧪 Testing Enhanced Topic Mapping System\n');
  console.log('='.repeat(60));
  
  // Test 1: Operating Systems keywords
  console.log('\n📚 TEST 1: Operating Systems Keywords');
  console.log('-'.repeat(60));
  const osKeywords = ['memory', 'paging', 'process', 'scheduling', 'deadlock'];
  const osSuggestions = generateStudySuggestions(osKeywords);
  console.log('\n📋 Final Suggestions:');
  osSuggestions.forEach(s => console.log(`   [${s.priority}] ${s.topic}`));
  
  // Test 2: Database keywords
  console.log('\n\n📚 TEST 2: Database Management Keywords');
  console.log('-'.repeat(60));
  const dbKeywords = ['sql', 'query', 'normalization', 'transaction', 'index'];
  const dbSuggestions = generateStudySuggestions(dbKeywords);
  console.log('\n📋 Final Suggestions:');
  dbSuggestions.forEach(s => console.log(`   [${s.priority}] ${s.topic}`));
  
  // Test 3: Mixed keywords with frequency
  console.log('\n\n📚 TEST 3: Mixed Keywords (with duplicates)');
  console.log('-'.repeat(60));
  const mixedKeywords = ['memory', 'process', 'memory', 'deadlock', 'scheduling'];
  const mixedSuggestions = generateStudySuggestions(mixedKeywords);
  console.log('\n📋 Final Suggestions:');
  mixedSuggestions.forEach(s => console.log(`   [${s.priority}] ${s.topic}`));
  
  // Test 4: Partial matching
  console.log('\n\n📚 TEST 4: Partial Matching');
  console.log('-'.repeat(60));
  const partialKeywords = ['threading', 'normalized', 'routing', 'searching'];
  const partialSuggestions = generateStudySuggestions(partialKeywords);
  console.log('\n📋 Final Suggestions:');
  partialSuggestions.forEach(s => console.log(`   [${s.priority}] ${s.topic}`));
  
  // Test 5: Real-world example (from Assignment 1)
  console.log('\n\n📚 TEST 5: Real Assignment Keywords');
  console.log('-'.repeat(60));
  const realKeywords = ['switching', 'operating', 'system', 'type', 'process'];
  const realSuggestions = generateStudySuggestions(realKeywords);
  console.log('\n📋 Final Suggestions:');
  realSuggestions.forEach(s => console.log(`   [${s.priority}] ${s.topic}`));
  
  // Test 6: Network keywords
  console.log('\n\n📚 TEST 6: Computer Networks Keywords');
  console.log('-'.repeat(60));
  const netKeywords = ['tcp', 'ip', 'routing', 'osi', 'protocol'];
  const netSuggestions = generateStudySuggestions(netKeywords);
  console.log('\n📋 Final Suggestions:');
  netSuggestions.forEach(s => console.log(`   [${s.priority}] ${s.topic}`));
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ All topic mapping tests completed!\n');
};

testTopicMapping();
