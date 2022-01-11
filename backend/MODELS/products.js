import mongoose from 'mongoose'
const ProductSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    name: {
        type: String,
        required: [true, "Name is required"],
      },
      image: {
        type: String,
      },
      description: {
        type: String,
      },
      color: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      fabric: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      countInStock: {
        type: Number,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
      numReviews: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );
const Product=mongoose.model("Product",ProductSchema)
export default Product;