const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        uniquie: true,
    },
    description:{
        type: String,
        required: true,
        uniquie: true,
    },
    price:{
        type: String,
        required: true,   
    },
    image:{
        type: Image,
        required: true,  
    }
},{timestamps: true})

module.exports = mongoose.model("service", serviceSchema);