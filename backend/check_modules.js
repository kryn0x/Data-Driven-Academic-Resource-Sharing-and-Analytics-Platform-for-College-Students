import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const v = {
  tess: fs.existsSync(path.join(__dirname, 'node_modules', 'tesseract.js')),
  pdf: fs.existsSync(path.join(__dirname, 'node_modules', 'pdf-img-convert'))
};
fs.writeFileSync('v.json', JSON.stringify(v), 'utf8');
