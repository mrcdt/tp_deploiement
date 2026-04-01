const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenue dans mon application, je suis Marine CADET.' 
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    message: 'Voici les données concernant votre santé',
    status: 'ok', 
    timestamp: new Date().toISOString() 
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

module.exports = app;