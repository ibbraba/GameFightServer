const mongoose = require("mongoose")
require("dotenv").config()

const connectToDB = async () => {

    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME }:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DB connected with success");
    }catch(err){
        console.error("DB connexion impossible " + err);
    }
}


const disconnectFromDB= async () => {
    try {
        await mongoose.disconnect(); 
        console.log("Deconnexion de la BDD reussie");
    } catch (error) {
        console.log("Erreur lors de la connexion à la BDD", error);
    }
}


const initDatabase = async () => {
    await connectToDB(); 

}

module.exports = {initDatabase, disconnectFromDB}