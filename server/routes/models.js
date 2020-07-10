const {Router} = require('express');
const Models = require('../models/models');
const router = Router();

router.get('/', async (req, res) => {
  const models = await Models.find({brandId: req.query.brand}).populate('brandId');
  res.status(200).json(models);
})

module.exports = router;