const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  img_url: { type: String, required: true },
  available: { type: Boolean, required: true }
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);