const {Router} = require('express');
const Models = require('../models/models');
const router = Router();

router.get('/', async (req, res) => {
  const models = await Models.find({brandId: req.query.brandId}).populate('brandId');
  res.status(200).json(models.map(({model, _id}) => ({model, id: _id})));
})

module.exports = router;