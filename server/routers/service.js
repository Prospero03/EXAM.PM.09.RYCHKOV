const router = require("express").Router();
const serviceController = require("../controllers/serviceController")

router.post("/add-service", serviceController.addService)

module.exports = router