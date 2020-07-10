const {Schema, model} = require('mongoose')

const pricesSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  modelId: {
    type: Schema.Types.ObjectId,
    ref: 'Models',
    required: true,
  },
})

module.exports = model('Prices', pricesSchema)