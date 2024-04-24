const fs = require('fs');
const { readCSVToArray, writeArrayToCSV } = require('../src/fileOperations');
const faker = require('faker');

describe('CSV Operations', () => {
    const testFilename = 'test_data.csv';

    beforeEach(() => {
    
    const csvData = [
        'name,age,email',
        `${faker.name.firstName()},${faker.random.number(100)},${faker.internet.email()}`,
        `${faker.name.firstName()},${faker.random.number(100)},${faker.internet.email()}`,
        `${faker.name.firstName()},${faker.random.number(100)},${faker.internet.email()}`
    ].join('\n');


    fs.writeFileSync(testFilename, csvData);
  });

    afterEach(() => {
        if (fs.existsSync(testFilename)) {
        fs.unlinkSync(testFilename);
        }
    });

    test('Read CSV file into array of objects', () => {
        const data = readCSVToArray(testFilename);

        expect(data).toHaveLength(3);
        expect(data[0]).toHaveProperty('name');
        expect(data[0]).toHaveProperty('age');
        expect(data[0]).toHaveProperty('email');
    });

    test('Read empty CSV file', () => {
        fs.writeFileSync(testFilename, '');

        const data = readCSVToArray(testFilename);

        expect(data).toHaveLength(0);
    });

    test('Write array of objects to CSV file', () => {
        const newData = [
            { name: 'John', age: 30, email: 'john@example.com' },
            { name: 'Jane', age: 25, email: 'jane@example.com' }
        ];
    
        writeArrayToCSV(testFilename, newData);
    
        const data = readCSVToArray(testFilename);
    
        expect(data).toHaveLength(2);
        
        expect(data[0]).toEqual({
            name: 'John',
            age: '30', 
            email: 'john@example.com'
        });
    
        expect(data[1]).toEqual({
            name: 'Jane',
            age: '25',
            email: 'jane@example.com'
        });
    });
      

});
