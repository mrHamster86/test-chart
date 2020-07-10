const {Schema, model} = require('mongoose')

const modelsSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  brandId: {
    type: Schema.Types.ObjectId,
    ref: 'Brands',
    required: true,
  },
})

module.exports = model('Models', modelsSchema)