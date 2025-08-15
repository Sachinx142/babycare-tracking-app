const mongoose = require("mongoose")

const EventSchema =  mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Field Required"]
    },
    date:{
        type:String,
        required:[true,"Event Date Field Is Mendatory"]
    },
    time:{
        type:String,
        required:[true,"Event Time Field Is Mendatory"]
    },
    location:{
        type:String,
        required:[true,"Event Location Field Is Mendatory"]
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

const Event = new mongoose.model("Event",EventSchema)

module.exports = Event 