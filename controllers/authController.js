const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');

// Chargement des variables d'environnement
dotenv.config();


exports.postRegister = async (req, res) => {
    try {

        console.log("Register request received");
        const hashedPassword = await bcryptjs.hash(req.body.password, 10); // hashage du mot de passe
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        console.log("User successfully created in DB");
        res.redirect('/login');
    } catch (error) {
        console.error(error);
     
    }
};


exports.postLogin = async (req, res) => {
    try {

        console.log("Post login in controller");
        const user = await User.findOne({username: req.body.username});
        console.log(user)

        if (user && await bcryptjs.compare(req.body.password, user.password)) {
            
            // création du token
            console.log("User connected, creating token and redirecting ...");
            const token = jwt.sign( { 
            userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
            );
            res.cookie('token', token, {
                expire: new Date(Date.now() + 7200000), // expiration dans 2 heures
                httpOnly: true,
                secure: true // à activer si HTTPS
            });
            res.redirect('/profil');
        } else {

            console.log("Invalid credentials, back to login");
            res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        res.redirect('/login');
    };          

};