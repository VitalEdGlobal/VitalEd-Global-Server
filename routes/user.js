const express = require('express');
const userController = require('../controllers/user');


const router = express.Router();

router.get("/" , userController.showUsers);
router.post("/add", userController.addUser);
router.delete("/:userId/delete", userController.deleteUser);
router.patch("/:userId/update", userController.updateUser);


module.exports = router;