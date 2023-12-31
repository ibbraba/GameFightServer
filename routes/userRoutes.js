var express = require('express');
const { route } = require('.');
var router = express.Router(); 

const authController = require('../controllers/authController')
const gameController = require("../controllers/GameController")
const { isLoggedIn }  = require('../middlewares/auth')

router.post('/register', authController.postRegister, );

router.post("/login", authController.postLogin);

router.post("/private/create", gameController.postCreate, isLoggedIn)

router.get("/private/caracters", gameController.getCaracters, isLoggedIn)

router.get("private/caracter")

router.get("/validate", authController.getValidate)

module.exports = router