const fs = require('fs');
const { readCSVToArray, writeArrayToCSV } = require('../src/fileOperations');

describe('readCSVToArray', () => {
    const testFilename = 'test_data.csv';

    beforeEach(() => {
        // Créer un fichier CSV de test
        const csvContent = `name,age,email
John,30,john@example.com
Jane,25,jane@example.com`;

        fs.writeFileSync(testFilename, csvContent);
    });

    afterEach(() => {
        // Supprimer le fichier CSV de test
        fs.unlinkSync(testFilename);
    });

    test('Read CSV file into array of objects', () => {
        const data = readCSVToArray(testFilename);

        expect(data).toHaveLength(2);
        expect(data[0]).toEqual({ name: 'John', age: '30', email: 'john@example.com' });
        expect(data[1]).toEqual({ name: 'Jane', age: '25', email: 'jane@example.com' });
    });

    test('Read empty CSV file', () => {
        // Créer un fichier CSV vide
        fs.writeFileSync(testFilename, '');

        const data = readCSVToArray(testFilename);

        expect(data).toHaveLength(0);
    });

    test('Handle CSV file with missing values', () => {
        // Créer un fichier CSV avec des valeurs manquantes
        const csvContent = `name,age,email
John,30,
Jane,,jane@example.com`;

        fs.writeFileSync(testFilename, csvContent);

        const data = readCSVToArray(testFilename);

        expect(data).toHaveLength(2);
        expect(data[0]).toEqual({ name: 'John', age: '30', email: '' });
        expect(data[1]).toEqual({ name: 'Jane', age: '', email: 'jane@example.com' });
    });
});

describe('writeArrayToCSV', () => {
    const testOutputFilename = 'test_output.csv';

    afterEach(() => {
        // Supprimer le fichier CSV de sortie créé par le test
        if (fs.existsSync(testOutputFilename)) {
            fs.unlinkSync(testOutputFilename);
        }
    });

    test('Write array of objects to CSV file', () => {
        const data = [
            { name: 'John', age: 30, email: 'john@example.com' },
            { name: 'Jane', age: 25, email: 'jane@example.com' }
        ];

        writeArrayToCSV(testOutputFilename, data);

        const csvContent = fs.readFileSync(testOutputFilename, 'utf8');

        // Vérifier le contenu du fichier CSV créé
        const expectedCSVContent = `name,age,email
John,30,john@example.com
Jane,25,jane@example.com
`;
        expect(csvContent).toEqual(expectedCSVContent);
    });

    test('Write empty array to CSV file', () => {
        const testOutputFilename = 'test_output.csv';
        const emptyData = [];
    
        // Écrire le fichier CSV vide
        fs.writeFileSync(testOutputFilename, '');
    
        // Appeler la fonction à tester
        writeArrayToCSV(testOutputFilename, emptyData);
    
        // Lire le contenu du fichier CSV
        const csvContent = fs.readFileSync(testOutputFilename, 'utf8');
    
        // Vérifier que le fichier CSV est vide
        expect(csvContent.trim()).toEqual('');
    });

    /*test('Handle array with missing values', () => {
        const testOutputFilename = 'test_output.csv';
        const data = [
            { name: 'John', age: 30 },
            { name: 'Jane', email: 'jane@example.com' }
        ];
    
        // Appeler la fonction à tester
        writeArrayToCSV(testOutputFilename, data);
    
        // Lire le contenu du fichier CSV
        const csvContent = fs.readFileSync(testOutputFilename, 'utf8');
    
        // Définir le contenu CSV attendu avec les valeurs manquantes gérées
        const expectedCSVContent = `name,age,email\nJohn,30,\nJane,,jane@example.com\n`;
    
        // Vérifier que le fichier CSV généré correspond au contenu attendu
        expect(csvContent).toEqual(expectedCSVContent);
    });*/
    
});
