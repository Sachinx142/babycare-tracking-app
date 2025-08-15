const mongoose = require("mongoose")

const TestimonialSchema =  mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Field Required"]
    },
    profession:{
        type:String,
        required:[true,"Profession is Field Required"]
    },
    message:{
        type:String,
        required:[true,"Message is Field Required"]
    },
    pic:{
        type:String,
        required:[true,"Name is Field Required"]
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

const Testimonial = new mongoose.model("Testimonial",TestimonialSchema)

module.exports = Testimonial 