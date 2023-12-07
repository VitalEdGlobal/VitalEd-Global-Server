const express = require('express');
const homeController = require('../controllers/home');




const router = express.Router();


router.get("/", homeController.showHome);
router.post("/add", homeController.addHome);
router.patch("/update", homeController.updateHome);
router.delete("/delete", homeController.deleteHome);

module.exports = router;