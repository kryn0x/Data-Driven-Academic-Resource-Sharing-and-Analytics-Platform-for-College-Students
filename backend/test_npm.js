import { spawnSync } from 'child_process';
import fs from 'fs';
const result = spawnSync('npm.cmd', ['install'], { shell: false });
fs.writeFileSync('npm_out.txt', result.stdout || 'no stdout');
fs.writeFileSync('npm_err.txt', result.stderr || 'no stderr');
