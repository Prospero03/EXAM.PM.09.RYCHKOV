const express =require("express");
const app = express();
require("dotenv").config();
require("./database/connMongo");
const cors = require("cors");
//const serviceApi = require("./routers/service")


app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true
    })
)

//app.use("/api/v1", serviceApi);

app.listen(process.env.PORT, ()=>{
    console.log(`Сервер запущен на ${process.env.PORT}`)
})