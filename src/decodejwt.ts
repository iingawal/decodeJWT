const jwtDecode: any = require('jwt-decode'); // Install with `npm install jwt-decode`
import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files from the src directory
app.use(express.static(path.join(__dirname, '..')));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});






// Client-side code that runs in the browser
// This function will be available in the browser when this file is loaded
declare const document: any;

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const tokenInput = document.getElementById('tokenInput') as HTMLInputElement;
    const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
    const outputArea = document.getElementById('outputArea') as HTMLElement;

    submitButton?.addEventListener('click', () => {
      const token1: string = tokenInput.value;
      if (token1 !== null && token1 !== '') {
        const decoded = jwtDecode(token1 as string);
        outputArea.textContent = JSON.stringify(decoded);
      } else {
        outputArea.textContent = 'No token entered';
      }
    });
  });
}
