const addMockModels = require("./addMockModels");
const addMockCars = require("./addMockCars");
const Brands = require('../models/brands');
const Models = require('../models/models');

const mockData = async () => {
  if (await Brands.count() === 0) {
    await addMockCars();
    await addMockModels();
  }

  if (await Models.count() === 0) {
    await addMockModels();
  }
}

module.exports = mockData;