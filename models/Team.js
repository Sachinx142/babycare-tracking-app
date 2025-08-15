const mongoose = require("mongoose")

const TeamSchema =  mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Field Required"]
    },
    profile:{
        type:String,
        required:[true,"Profile  is Field Required"]
    },
    facebook: {
        type: String,
        default: ""
    },
    linkedin: {
        type: String,
        default: ""
    },
    twitter: {
        type: String,
        default: ""
    },
    instagram: {
        type: String,
        default: ""
    },
    pic:{
        type:String,
        required:[true,"Pic is Field Required"]
    },
    sortOrder:{
      type:Number,
      default:10
    },
    active:{
        type:Boolean,
        default : true
    },
})

const Team = new mongoose.model("Team",TeamSchema)

module.exports = Team 