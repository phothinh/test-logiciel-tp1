const faker = require('faker');

function generateDataList(numEntries) {
  const dataList = [];
  for (let i = 0; i < numEntries; i++) {
    dataList.push({
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
    });
  }
  return dataList;
}

module.exports = { generateDataList };
