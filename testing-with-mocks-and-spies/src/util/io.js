import path from 'path';
import { promises as fs } from 'fs';

// NOTE: from observation, it seems that process.cwd() refers to the current working directory (cwd) where the process is being called from 
  // so, if the writeData function is being called from app.js, then the directory where app.js lives is the cwd

export default function writeData(data, filename) {
  const storagePath = path.join(process.cwd(), 'data', filename);
  return fs.writeFile(storagePath, data);  // returns a promise
}
