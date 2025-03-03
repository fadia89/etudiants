import chalk from 'chalk';
import http from 'http';
import fs from 'fs';
import axios from 'axios';

// Affichage des noms avec différentes couleurs
console.log(chalk.bgRed.bold('Coralie'));
console.log(chalk.bgCyan('Galystan'));
console.log(chalk.underline.blueBright('David'));
console.log(chalk.italic.bgMagenta.bold('Lucie'));

const filePath = 'newFile.txt';
const data = 'Premier fichier créé avec Node.js !';

// Créer un fichier avec du contenu texte 
fs.writeFile(filePath, data, 'utf8', (err) => {
    if (err) {
        console.log('Erreur lors de l\'écriture du fichier:', err);
    } else {
        console.log('Le fichier a été créé avec succès.');

        // Lire le fichier après l'avoir écrit
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log('Erreur lors de la lecture du fichier:', err);
            } else {
                console.log('Contenu du fichier :', data);
            }
        });
    }
});

// axios pour récupérer la page Google et la sauvegarder dans un fichier
const googleUrl = 'http://www.google.com';
const fileGoogle = 'htmlFile.html';

axios.get(googleUrl)
    .then((response) => {
        fs.writeFile(fileGoogle, response.data, 'utf8', (err) => {
            if (err) {
                console.log('Erreur lors de l\'écriture du fichier html:', err);
            } else {
                console.log('Le fichier HTML a été créé avec succès.');
            }
        });
    })
    .catch((err) => {
        console.log('Erreur lors de la récupération de la page Google:', err);
    });

// Créer le serveur HTTP
const PORT = 8000;
const localhost = 'localhost';

// Code du serveur HTTP sous forme de chaîne de caractères
const serverCode = `
import http from 'http';

const server = http.createServer((request, response) => {
    response.end('<h1>Hello world</h1>');
});

server.listen(${PORT}, '${localhost}', () => {
    console.log('Server is running on port ${PORT}');
});
`;

// Créer le fichier 'server.js' avec le code du serveur HTTP
fs.writeFile('server.js', serverCode, 'utf8', (err) => {
    if (err) {
        console.error('Erreur lors de l\'écriture du fichier server.js:', err);
    } else {
        console.log('Le fichier server.js a été créé avec succès.');
    }
});

// Créer et démarrer le serveur HTTP dans le fichier actuel
const server = http.createServer((request, response) => {
    response.end('<h1>Hello world</h1>');  
});

server.listen(PORT, localhost, () => {
    console.log(`Server is running on port ${PORT}`);
});
