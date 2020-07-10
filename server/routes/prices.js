const {Router} = require('express');
const Prices = require('../models/prices');
const router = Router();

router.get('/', async (req, res) => {
  const prices = await Prices.find({modelId: req.query.model});
  res.status(200).json(prices);
})

module.exports = router;