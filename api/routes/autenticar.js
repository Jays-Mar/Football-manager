const express = require("express");
const {loginCtrl, registerCtrl} = require("../controllers/autenticar")
const router = express.Router();

router.post("/register",  registerCtrl);

router.post("/login", loginCtrl);

module.exports = router;