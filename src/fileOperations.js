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

function writeArrayToCSV(filename, data) {
    try {
        if (!data || data.length === 0) {
            console.error('Error writing CSV file: Data array is empty');
            return;
        }

        const headers = Object.keys(data[0]);
        const csvLines = [];

        // Construire chaque ligne du CSV
        data.forEach((entry) => {
            const values = headers.map((header) => entry[header] || ''); // Gérer les valeurs manquantes
            csvLines.push(values.join(','));
        });

        const csvContent = `${headers.join(',')}\n${csvLines.join('\n')}\n`;

        fs.writeFileSync(filename, csvContent);
        console.log(`CSV file "${filename}" created successfully`);
    } catch (error) {
        console.error('Error writing CSV file:', error);
    }
}



module.exports = { readCSVToArray, writeArrayToCSV};
