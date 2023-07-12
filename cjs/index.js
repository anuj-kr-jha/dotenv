require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`PORT: ${process.env.PORT}`);
console.log(`DB_PORT: ${process.env.DB_PORT}`);
console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);

// NODE_ENV=dev node app.js
