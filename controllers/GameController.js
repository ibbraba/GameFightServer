const Caracter = require("../models/Caracter")



exports.postCreate = async (req, res) => { 

    try {
        console.log("Caracter creation POST request received");
        await Caracter.create({
            name : req.body.name,
            picture : req.body.picture,
            strengh : req.body.strengh, 
            stamina : req.body.stamina, 
            defense : req.body.defense, 
            speed : req.body.speed
        })

        console.log("Caracter successfully created in DB");
        res.send("Caracter successfully created in DB")
    } catch (error) {
        console.log(error);
    }





}


exports.getCaracters = async (req, res) => {
    try {
        
        console.log("Get method caracter method received");
        const caracters = await Caracter.find()
        res.send(caracters)
    } catch (error) {
        console.log(error);
    }
}