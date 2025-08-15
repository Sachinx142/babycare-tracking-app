const mongoose = require("mongoose")

const BlogSchema =  mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Field Required"]
    },
    shortDescription:{
        type:String,
        required:[true,"Message is Field Required"]
    },
    longDescription:{
        type:String,
        required:[true,"Name is Field Required"]
    },
    cover:{
        type:String,
        required:[true,"Cover is Field Required"]
    },
    seats:{
        type:Number,
        default:50
    },
    duration:{
        type:Number,
         default:60
    },
    sortOrder:{
      type:Number,
      default:10
    },
    metaTitle: {
        type: String,
        default: ""
    },
    metaDescription: {
        type: String,
        default: ""
    },
    metaKeywords: {
        type: String,
        default: ""
    },
    active:{
        type:Boolean,
        default : true
    },
},{timestamps:true})

const Blog = new mongoose.model("Blog",BlogSchema)

module.exports = Blog 