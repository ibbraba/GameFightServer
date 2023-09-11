const mongoose = require('mongoose');

// Schéma de l'utilisateur pour MongoDB avec Mongoose
const caracterSchema = new mongoose.Schema({
    // Nom d'utilisateur
    name: {
        type: String, 
        required : true, 
        unique: true
    }, 

    picture : {
        type : String, 
        required : false
    }, 

    strengh : {
        type : Number,
        required : true
    },

    stamina : {
        type : Number,
        required : true
    },

    defense : {
        type : Number,
        required : true
    },

    speed : {
        type : Number,
        required : true
    }


    
})


const Caracter = mongoose.model("Caracter", caracterSchema)

module.exports = Caracter;