const fs = require('fs');

function readCSVToArray(filename) {
  try {
        const csvData = fs.readFileSync(filename, 'utf8');

        const lines = csvData.trim().split('\n');

        // Récupérer les en-têtes (première ligne)
        const headers = lines.shift().split(',');

        const dataArray = [];

        // Parcourir chaque ligne du CSV
        lines.forEach((line) => {
        const values = line.split(',');
        const entry = {};

        // Créer un objet avec les données de chaque ligne
        headers.forEach((header, index) => {
            entry[header.trim()] = values[index].trim();
        });

        // Ajouter l'entrée à l'array de données
        dataArray.push(entry);
        });

        return dataArray;
    } catch (error) {
        console.error('Error reading CSV file:', error);
        return [];
    }
}

module.exports = { readCSVToArray };
