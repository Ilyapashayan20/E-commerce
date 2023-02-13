import mongoose from "mongoose";
const Schema = mongoose.Schema;


const optionSchema = new Schema({
    options:[{
        optionName:{
            type:String,
            required:false,
        },
        optionValues:[{
            value:{
                type:String,
                required:false,
            },
            price:{
                type:Number,
            },
            quantity:{
                type:Number,
            },
            images:{
                type:Array,
                default:[],
            }
        }]
    }]
});


const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type:Array,
        default:[]
    },
    option: [optionSchema],
    quality: {
        type: Number,
        required: true,
    },
    highlights: {
        type: Array,
        default: []
    },
    sales: {
        type: Number,
        default: 0
    },
    tags: {
        type: Array,
        default: []
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    imagesURL: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Image'
        }
    ],
},
    {
        timestamps: true
    });

const Product = mongoose.model('Product', productSchema);

export default Product;