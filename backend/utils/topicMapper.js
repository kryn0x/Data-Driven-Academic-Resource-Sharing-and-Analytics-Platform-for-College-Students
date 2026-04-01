// Comprehensive mapping dictionary for keywords to academic topics
// Using arrays to support multiple keywords per topic
const topicMappings = {
  // Operating Systems
  'Memory Management': ['memory', 'paging', 'segmentation', 'virtual', 'ram', 'cache', 'swap'],
  'Process Scheduling': ['process', 'thread', 'scheduling', 'scheduler', 'cpu', 'context', 'switching'],
  'Deadlocks': ['deadlock', 'starvation', 'livelock', 'resource', 'allocation'],
  'File Systems': ['file', 'disk', 'directory', 'inode', 'storage', 'filesystem'],
  'Concurrency': ['semaphore', 'mutex', 'synchronization', 'lock', 'critical', 'section'],
  'Inter-Process Communication': ['ipc', 'pipe', 'message', 'queue', 'shared', 'communication'],
  
  // Database Management Systems
  'SQL Queries': ['sql', 'query', 'select', 'join', 'where', 'group'],
  'Normalization': ['normalization', 'normal', 'form', '1nf', '2nf', '3nf', 'bcnf', 'dependency'],
  'Indexing': ['index', 'btree', 'hash', 'indexing', 'search', 'optimization'],
  'Transaction Management': ['transaction', 'acid', 'commit', 'rollback', 'isolation', 'atomicity'],
  'Database Design': ['schema', 'entity', 'relationship', 'erd', 'design', 'model'],
  'Relational Algebra': ['relational', 'algebra', 'projection', 'selection', 'cartesian'],
  
  // Computer Networks
  'OSI Model': ['osi', 'layer', 'protocol', 'stack', 'model'],
  'TCP/IP Protocol': ['tcp', 'ip', 'transmission', 'internet', 'protocol'],
  'Routing Algorithms': ['routing', 'router', 'dijkstra', 'bellman', 'ford', 'rip', 'ospf'],
  'Network Security': ['security', 'encryption', 'firewall', 'vpn', 'ssl', 'tls', 'cryptography'],
  'IP Addressing': ['subnet', 'subnetting', 'cidr', 'address', 'ipv4', 'ipv6', 'mask'],
  'Data Link Layer': ['mac', 'ethernet', 'frame', 'switching', 'arp', 'datalink'],
  
  // Data Structures & Algorithms
  'Arrays and Lists': ['array', 'list', 'linked', 'arraylist', 'vector'],
  'Trees': ['tree', 'binary', 'bst', 'avl', 'heap', 'trie'],
  'Graphs': ['graph', 'vertex', 'edge', 'adjacency', 'dfs', 'bfs'],
  'Sorting Algorithms': ['sort', 'sorting', 'bubble', 'merge', 'quick', 'heap'],
  'Searching Algorithms': ['search', 'searching', 'binary', 'linear', 'hashing'],
  'Dynamic Programming': ['dynamic', 'programming', 'dp', 'memoization', 'optimization'],
  'Recursion': ['recursion', 'recursive', 'backtracking', 'divide', 'conquer'],
  
  // Software Engineering
  'Software Development Life Cycle': ['sdlc', 'waterfall', 'agile', 'scrum', 'lifecycle'],
  'Testing': ['testing', 'unit', 'integration', 'test', 'debugging', 'validation'],
  'Design Patterns': ['pattern', 'singleton', 'factory', 'observer', 'mvc', 'design'],
  'Object-Oriented Programming': ['oop', 'class', 'object', 'inheritance', 'polymorphism', 'encapsulation'],
  
  // Computer Architecture
  'Instruction Set Architecture': ['instruction', 'isa', 'risc', 'cisc', 'assembly'],
  'Pipelining': ['pipeline', 'pipelining', 'hazard', 'forwarding', 'stall'],
  'Cache Memory': ['cache', 'hit', 'miss', 'locality', 'mapping'],
  
  // Theory of Computation
  'Automata Theory': ['automata', 'dfa', 'nfa', 'finite', 'state', 'machine'],
  'Regular Expressions': ['regex', 'regular', 'expression', 'pattern', 'matching'],
  'Context-Free Grammars': ['grammar', 'cfg', 'parse', 'parser', 'syntax'],
  'Turing Machines': ['turing', 'machine', 'computability', 'decidability'],
  
  // Compiler Design
  'Lexical Analysis': ['lexical', 'lexer', 'token', 'scanner', 'tokenization'],
  'Syntax Analysis': ['syntax', 'parser', 'parsing', 'grammar', 'tree'],
  'Code Generation': ['code', 'generation', 'optimization', 'intermediate', 'target'],
  
  // Web Development
  'Frontend Development': ['html', 'css', 'javascript', 'react', 'vue', 'angular', 'frontend'],
  'Backend Development': ['backend', 'server', 'api', 'rest', 'node', 'express'],
  'Database Integration': ['database', 'mongodb', 'mysql', 'postgresql', 'orm'],
  
  // Machine Learning
  'Supervised Learning': ['supervised', 'classification', 'regression', 'training', 'label'],
  'Neural Networks': ['neural', 'network', 'deep', 'learning', 'cnn', 'rnn', 'lstm'],
  'Clustering': ['clustering', 'kmeans', 'hierarchical', 'unsupervised']
};

// Helper function to check if keyword matches any topic keywords (partial matching)
const findMatchingTopics = (keyword) => {
  const matches = [];
  const lowerKeyword = keyword.toLowerCase();
  
  for (const [topic, keywords] of Object.entries(topicMappings)) {
    for (const topicKeyword of keywords) {
      // Check if keyword includes topic keyword or vice versa (partial matching)
      if (lowerKeyword.includes(topicKeyword) || topicKeyword.includes(lowerKeyword)) {
        matches.push(topic);
        break; // Found a match for this topic, move to next topic
      }
    }
  }
  
  return matches;
};

const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateStudySuggestions = (keywords) => {
  if (!keywords || !Array.isArray(keywords) || keywords.length === 0) {
    return [];
  }

  console.log('🎯 Mapping keywords to study topics...');
  console.log('📝 Input keywords:', keywords);

  // Count frequency of each topic
  const topicFrequency = {};
  
  for (const keyword of keywords) {
    const matchingTopics = findMatchingTopics(keyword);
    
    if (matchingTopics.length > 0) {
      console.log(`   "${keyword}" → ${matchingTopics.join(', ')}`);
      
      for (const topic of matchingTopics) {
        topicFrequency[topic] = (topicFrequency[topic] || 0) + 1;
      }
    } else {
      // Fallback: use capitalized keyword as topic
      const fallbackTopic = capitalize(keyword);
      console.log(`   "${keyword}" → ${fallbackTopic} (fallback)`);
      topicFrequency[fallbackTopic] = (topicFrequency[fallbackTopic] || 0) + 1;
    }
  }

  // Sort topics by frequency (descending)
  const sortedTopics = Object.entries(topicFrequency)
    .sort(([, freqA], [, freqB]) => freqB - freqA)
    .map(([topic, frequency]) => ({ topic, frequency }));

  console.log('📊 Topic frequencies:', sortedTopics);

  // Generate study suggestions with priority based on frequency
  const suggestions = sortedTopics.map(({ topic, frequency }, index) => {
    let priority = 'Low';
    
    // High priority: frequency >= 2 OR top 2 topics
    if (frequency >= 2 || index < 2) {
      priority = 'High';
    } 
    // Medium priority: next 2 topics
    else if (index < 4) {
      priority = 'Medium';
    }

    return {
      topic,
      priority
    };
  });

  console.log('✅ Generated study suggestions:', suggestions);
  
  return suggestions;
};
