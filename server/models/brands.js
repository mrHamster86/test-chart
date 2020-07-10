const {Schema, model} = require('mongoose')

const carsSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
})

module.exports = model('Brands', carsSchema)