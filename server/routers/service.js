const router = require("express").Router();
const serviceController = require("../controllers/serviceController");

router.get("/get-all-services", serviceController.getAllServices);
router.post("/create-product", serviceController.createService);

module.exports = router;