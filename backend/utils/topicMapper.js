// Mapping dictionary for keywords to high-level academic topics
const keywordToTopicMap = {
  // Operating Systems
  'memory': 'Memory Management',
  'paging': 'Memory Management',
  'segmentation': 'Memory Management',
  'process': 'Process Scheduling',
  'thread': 'Process Scheduling',
  'deadlock': 'Deadlocks',
  'semaphore': 'Concurrency',
  'mutex': 'Concurrency',
  // Database Management Systems
  'sql': 'SQL Queries',
  'query': 'SQL Queries',
  'normalization': 'Normalization',
  'nf': 'Normalization',
  'transaction': 'Transaction Management',
  'acid': 'Transaction Management',
  'index': 'Indexing',
  // Computer Networks
  'tcp': 'Networking Protocols',
  'udp': 'Networking Protocols',
  'ip': 'Networking Protocols',
  'routing': 'Network Routing',
  'subnet': 'IP Addressing',
  // Algorithms and Data Structures
  'array': 'Data Structures',
  'tree': 'Data Structures',
  'graph': 'Graph Algorithms',
  'sort': 'Sorting Algorithms',
  'search': 'Searching Algorithms'
};

const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateStudySuggestions = (keywords) => {
  if (!keywords || !Array.isArray(keywords)) {
    return [];
  }

  const topicSet = new Set();
  const topics = [];

  // Map keywords to topics and remove duplicates
  for (const keyword of keywords) {
    const lowerKeyword = keyword.toLowerCase();
    
    // Check if the keyword exists in our dictionary
    let mappedTopic;
    if (keywordToTopicMap[lowerKeyword]) {
      mappedTopic = keywordToTopicMap[lowerKeyword];
    } else {
      // Fallback: capitalize the raw keyword if not mapped
      mappedTopic = capitalize(lowerKeyword);
    }
    
    if (!topicSet.has(mappedTopic)) {
      topicSet.add(mappedTopic);
      topics.push(mappedTopic);
    }
  }

  // Generate study suggestions with priority logic
  // Priority: first 2 High, next 2 Medium, rest Low
  const suggestions = topics.map((topic, index) => {
    let priority = 'Low';
    
    if (index < 2) {
      priority = 'High';
    } else if (index < 4) {
      priority = 'Medium';
    }

    return {
      topic,
      priority
    };
  });

  return suggestions;
};
