const mongoose =require("mongoose");

const serviceSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    example:{
        type:String,
        required: true
    },
    
},{timestamps: true})

module.exports = mongoose.model("service", serviceSchema);