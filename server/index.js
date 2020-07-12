const express = require('express');
const mongoose = require('mongoose');
const keys = require('./keys');

const brandsRoutes = require('./routes/brans');
const modelsRoutes = require('./routes/models');
const pricesRoutes = require('./routes/prices');

const addMockData = require('./mock/index');

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/brands', brandsRoutes);
app.use('/models', modelsRoutes);
app.use('/prices', pricesRoutes);

const PORT = process.env.PORT || 1337;

async function start() {
  try {
    await mongoose.connect(keys.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    await addMockData();

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
}

start();