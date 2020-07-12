const path = require('path');
const moment = require('moment');

const Brands = require('../models/brands');
const Models = require('../models/models');
const Prices = require('../models/prices');

const readFiles = require("../function/readFiles");
const getRandomInRange = require('../function/getRandomInRange');
const getDatesArray = require('../function/getDatesArray');

const mockData = async () => {
  if (await Brands.count() > 0) return;

  const carBrands = await readFiles(path.join(__dirname, 'json', 'cars.json'));
  const carModels = await readFiles(path.join(__dirname, 'json', 'models.json'));

  await Promise.all(carBrands.map((brand) => new Brands({brand}).save()));

  await Promise.all(carModels.map(async ({brand, model}) => {
    const brandId = (await Brands.findOne({brand}))._id;
    return new Models({model, brandId})
      .save()
      .then((res) => {
        const dateEnd = moment().format('MM-DD-YYYY');
        const dateStart = moment(dateEnd, 'MM-DD-YYYY').subtract(1, 'month').format('MM-DD-YYYY');
        const basePrice = getRandomInRange(10000, 50000);
        const dates = getDatesArray(dateStart, dateEnd);

        return Promise.all(dates.map((date) => {
          return new Prices({
            price: basePrice + getRandomInRange(100, 5000),
            date,
            modelId: res._id
          }).save();
        }));
      })
  }));
}

module.exports = mockData;