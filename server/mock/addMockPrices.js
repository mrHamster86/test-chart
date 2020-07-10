const moment = require('moment');

const Prices = require('../models/prices');
const getRandomInRange = require('../function/getRandomInRange');
const getDatesArray = require('../function/getDatesArray');

const addMockPrices = async (modelCars) => {
  const dateEnd = moment().format('MM-DD-YYYY');
  const dateStart = moment(dateEnd, 'MM-DD-YYYY').subtract(1, 'year').format('MM-DD-YYYY');
  const basePrice = getRandomInRange(10000, 50000);
  const dates = getDatesArray(dateStart, dateEnd);

  for (let date of dates) {
    new Prices({
      price: basePrice + getRandomInRange(100, 5000),
      date,
      modelId: modelCars._id
    }).save();
  }
}

module.exports = addMockPrices;