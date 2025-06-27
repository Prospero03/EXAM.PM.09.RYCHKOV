const Service = require("../models/service");

exports.getAllServices = async(req,res)=>{
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



exports.createService = async (req, res) => {
    try {
        const { title, description, price, example } = req.body;
        
        // Проверка обязательных полей
        if (!title || !description || !price ||! example) {
            return res.status(400).json({
                success: false,
                error: "Необходимо указать название, описание и цену"
            });
        }

        const newService = new Service({
            title,
            description,
            price,
            example
        });

        const savedService = await newService.save();
        
        return res.status(201).json({
            success: true,
            message: "Продукт успешно создан",
            data: savedService
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            error: "Ошибка сервера при создании продукта"
        });
    }
};