import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envFilePath = resolve(__dirname, `.env.${process.env.NODE_ENV}`);

dotenv.config({ path: envFilePath });

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`PORT: ${process.env.PORT}`);
console.log(`DB_PORT: ${process.env.DB_PORT}`);
console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);

// NODE_ENV=dev node index.js
