import fs from 'fs';
try {
  const mod = await import('./utils/pdfProcessor.js');
  fs.writeFileSync('run_log.txt', 'Loaded successfully', 'utf8');
} catch (e) {
  fs.writeFileSync('run_log.txt', e.stack, 'utf8');
}
