const express = require('express');
const forSchoolsController = require('../controllers/forschools');



const router = express.Router();


router.get("/", forSchoolsController.showForSchools);
router.post("/add", forSchoolsController.addForSchools);
router.patch("/:forSchoolsId/update", forSchoolsController.updateForSchools);
router.delete("/:forSchoolsId/delete", forSchoolsController.deleteForSchools);


module.exports = router;