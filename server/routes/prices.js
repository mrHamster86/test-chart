const {Router} = require('express');
const Prices = require('../models/prices');
const router = Router();

router.get('/', async (req, res) => {
  const prices = await Prices.find({modelId: req.query.modelId}).populate('modelId');
  const pricesObject = {};

  for (let {price, date} of prices) {
    pricesObject[date] = price;
  }

  res.status(200).json(pricesObject);
})

module.exports = router;