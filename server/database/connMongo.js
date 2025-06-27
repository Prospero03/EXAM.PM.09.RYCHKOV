const mongoose = require("mongoose");

const connMongo = async()=>{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("База данных подключена")
}

module.exports = connMongo()