const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
  brand: {
    type: String,
    require: true,
  },
  yearOfCreation: {
    type: Number,
    require: true,
  },
  localtionOfCreation: {
    type: String,
    require: true,
  },
});

const Brands = mongoose.model('brands', BrandSchema);

module.exports = Brands;
