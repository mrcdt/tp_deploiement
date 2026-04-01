const express = require('express');
const app = express();

app.use(express.json());

// Page d'accueil
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Accueil</title>
      </head>
      <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
        <h1>Bienvenue dans mon application, je suis Marine CADET.</h1>
        <br>
        <a href="/health">
          <button style="padding: 10px 20px; font-size: 16px; cursor: pointer;">Aller vers Health</button>
        </a>
      </body>
    </html>
  `);
});

//page health
app.get('/health', (req, res) => {
  const timestamp = new Date().toISOString();
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Health</title>
      </head>
      <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
        <h1>Voici les données concernant votre santé</h1>
        <p><strong>Status :</strong> ok</p>
        <p><strong>Timestamp :</strong> ${timestamp}</p>
        <br>
        <a href="/">
          <button style="padding: 10px 20px; font-size: 16px; cursor: pointer;">Retour à l'accueil</button>
        </a>
      </body>
    </html>
  `);
});


app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

module.exports = app;