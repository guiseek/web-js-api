import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: {
    type: Number,
    default: 0
  },
  amount: {
    type: Number,
    default: 1
  },
  weight: {
    type: Number,
    default: 0
  }
});