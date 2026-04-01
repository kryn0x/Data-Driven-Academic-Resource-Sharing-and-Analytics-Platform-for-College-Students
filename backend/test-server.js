console.log('Test server starting...');

import express from 'express';
console.log('Express imported');

const app = express();
console.log('App created');

app.get('/', (req, res) => {
  res.json({ message: 'Test server works!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});
