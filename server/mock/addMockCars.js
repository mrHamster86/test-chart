const path = require('path');
const fs = require('fs');
const Brands = require('../models/brands');

const addMockCars = async () => {
  await fs.readFile(
    path.join(__dirname, 'json', 'cars.json'),
    async (err, content) => {
      if (err) {
        throw err;
      }

      const carsBrandList = JSON.parse(content);
      await Promise.all(carsBrandList.map((brand) => new Brands({brand}).save()));
    },
  )
}

module.exports = addMockCars;