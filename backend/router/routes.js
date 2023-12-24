const express = require("express")
const {createUser, loginUser} = require("../controllers/auth");
const { addProduct } = require("../controllers/product");


const router = express.Router();
router.route("/register").post(createUser)
router.route("/login").post(loginUser)
router.route("/addProduct").post(addProduct)

module.exports = router;