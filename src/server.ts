import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the built client from the dist folder
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Use a proper wildcard route to avoid path-to-regexp errors
// Use a RegExp wildcard route to avoid path-to-regexp named-parameter errors
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Production server listening on http://localhost:${PORT}`);
});
