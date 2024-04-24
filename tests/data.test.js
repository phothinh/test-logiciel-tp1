const faker = require('faker');
const { generateDataList } = require('../src/data.js');

describe('Data Generation', () => {
  test('Generate a list of fake data', () => {
    const dataList = generateDataList(10);
    expect(dataList.length).toBe(10);
  });
});
