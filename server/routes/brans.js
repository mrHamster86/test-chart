const {Router} = require('express');
const Brands = require('../models/brands');
const router = Router();

router.get('/', async (req, res) => {
  const brands = await Brands.find();
  res.status(200).json(brands.map(({brand, _id}) => ({brand, id: _id})));
})

module.exports = router;