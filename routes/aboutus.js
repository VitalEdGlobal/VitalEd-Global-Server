const express = require('express');
const aboutUsController = require('../controllers/aboutus');



const router = express.Router();

router.get("/", aboutUsController.showAboutUs);
router.post("/add", aboutUsController.addAboutUs);
router.patch("/:aboutUsId/update", aboutUsController.updateAboutUs);
router.delete("/:aboutUsId/delete", aboutUsController.deleteAboutUs);


module.exports = router;