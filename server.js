const express = require('express');
const path = require('path');
const app = express();

// Définir le port (Elastic Beanstalk utilise le port 8081 ou 8080 par défaut)
const port = process.env.PORT || 8080;

// Servir le fichier index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
