const mongoose = require("mongoose")

const ProgramSchema =  mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Field Required"]
    },
    fee:{
        type:Number,
        required:[true,"Program Fee Field Is Mendatory"]
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
})

const Program = new mongoose.model("Program",ProgramSchema)

module.exports = Program 