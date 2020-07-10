const path = require('path');
const fs = require('fs');

const Brands = require('../models/brands');
const Models = require('../models/models');
const addMockPrices = require("./addMockPrices");

const addMockModels = async () => {
  await fs.readFile(
    path.join(__dirname, 'json', 'models.json'),
    async (err, content) => {
      if (err) {
        throw err;
      }

      const modelsList = JSON.parse(content)

      for (let {brand, model} of modelsList) {
        const carBrand = await Brands.findOne({brand});
        new Models({
          model,
          brandId: carBrand._id,
        }).save().then((model) => {
          addMockPrices(model);
        });
      }
    },
  )
}

module.exports = addMockModels;