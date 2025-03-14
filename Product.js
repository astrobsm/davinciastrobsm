// backend/models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  costPrice: {
    type: Number,
    required: true,
  },
  markupPercentage: {
    type: Number,
    required: true,
  },
  salesPrice: {
    type: Number,
    required: true,
  },
  lowStockThreshold: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
