const express = require('express');
const userController = require('../controllers/user');
const auth = require("../auth");

const {verify, verifyAdmin } = auth;

const router = express.Router();


router.get("/" , verify, verifyAdmin, userController.showUsers);
router.post("/login" , userController.userLogin);
router.post("/add", verify, verifyAdmin, userController.addUser);
router.delete("/:userId/delete", verify, verifyAdmin, userController.deleteUser);
router.patch("/:userId/update", verify, verifyAdmin, userController.updateUser);


module.exports = router;