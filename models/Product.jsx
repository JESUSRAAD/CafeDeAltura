import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  brand: String,
  price: Number,
  img_url: String,
  available: Boolean
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product