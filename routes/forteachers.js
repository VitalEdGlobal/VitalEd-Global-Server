const express = require('express');
const forTeachersController = require('../controllers/forteachers');



const router = express.Router();

router.get("/", forTeachersController.showForTeachers);
router.post("/add", forTeachersController.addForTeachers);
router.patch("/:forTeachersId/update", forTeachersController.updateForTeachers);
router.delete("/:forTeachersId/delete", forTeachersController.deleteForTeachers);


module.exports = router;