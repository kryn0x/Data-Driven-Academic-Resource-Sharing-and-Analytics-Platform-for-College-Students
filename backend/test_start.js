import { execSync } from 'child_process';
import fs from 'fs';
try {
  execSync('node server.js', { stdio: 'pipe' });
  fs.writeFileSync('start_error.txt', 'Started successfully');
} catch (e) {
  fs.writeFileSync('start_error.txt', e.stderr ? e.stderr.toString() : e.message);
}
