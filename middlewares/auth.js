const jwt = require('jsonwebtoken');

/**
 * Middleware
 * Check if user connected (valid JWT), or redirect
 */

function isLoggedIn(req, res) {
    console.log("Token verification");
    const token = req.headers.authorization;

    if(!token){
        console.log("Missing token");
         return  "Missing token"
        
    } 
        

    const tokenVerification = jwt.verify(token, process.env.JWT_SECRET, (err, decodedtoken) => {
        
        if(err){
            console.log(err.message);
            
            return err.message

        }else{
            return true
        }
        
         //Decode token and extrect user data 
        
      
    })

    return tokenVerification
    

}


module.exports = {
    isLoggedIn, 
 
}