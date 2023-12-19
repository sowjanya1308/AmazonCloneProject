const express = require("express")
// import express from "express"
const {createUser, loginUser} = require("../controllers/auth")
// import {createUser, loginUser} from "../controllers/auth"


const router = express.Router();
router.route("/register").post(createUser)
router.route("/login").post(loginUser)


module.exports = router;