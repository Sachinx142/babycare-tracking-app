const mongoose = require("mongoose")

const ServiceSchema =  mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Field Required"]
    },
    icon:{
        type:String,
        required:[true,"Icon is Field Required"]
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
})

const Service = new mongoose.model("Service",ServiceSchema)

module.exports = Service 