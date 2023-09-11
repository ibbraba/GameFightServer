var express = require('express');
const { route } = require('.');
var router = express.Router(); 

const authController = require('../controllers/authController')
const gameController = require("../controllers/GameController")

router.post('/register', authController.postRegister);

router.post("/login", authController.postLogin);

router.post("/create", gameController.postCreate)

router.get("/caracter", gameController.getCaracters)

module.exports = router