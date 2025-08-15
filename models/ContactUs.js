const mongoose = require("mongoose")

const ContactUsSchema =  mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Field Required"]
    },
    email:{
        type:String,
        required:[true,"Email Address  Field Is Mendatory"]
    },
    phone:{
        type:String,
        required:[true,"Phone Number Field Is Mendatory"]
    },
    subject:{
        type:String,
        required:[true,"Subject Location Field Is Mendatory"]
    },
    message:{
        type:String,
        required:[true,"Message is Field Required"]
    },
    active:{
        type:Boolean,
        default : true
    },
},{timestamps:true})

const ContactUs = new mongoose.model("ContactUs",ContactUsSchema)

module.exports = ContactUs 