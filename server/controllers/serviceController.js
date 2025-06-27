const Service = require("../models/service");

exports.getAllService = async(req,res)=>{
    try {
        const services = await Service.find({})
        return res
            .status(200)
            .json({success: true, data:services})
    } catch (error) {
        return res  
            .status(500)
            .json({success: false, error: "Ошибка Сервера"})
    }
}

exports.getSingleService = async(req,res) =>{
    try {
        const service = await Service.findById(req.params.id)
        return res
            .status(200)
            .json({success: true, data:service})
    } catch (error) {
        return res  
            .status(500)
            .json({success: false, error: "Ошибка Сервера"})
    }
}

exports.addService = async(req,res) => {
    try {
        const {title, description, price, image} = req.body;

        const newService = new Service({title, description, price, image});
        await newService.save()

    
        return res
            .status(200)
            .json({success: true, message: "Вы успешно добавли услугу"})
    } catch (error) {
        return res  
            .status(500)
            .json({success: false, error: "Ошибка Сервера"})
    }
}

