const jwt = require('jsonwebtoken');

/**
 * Middleware
 * Check if user connected (valid JWT), or redirect
 */

function isLoggedIn(req, res, next) {
    console.log("Token verification");
    const token = req.headers.authorization;
    console.log(req.headers);
    if(!token) return  res.send('Missing token'); 

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedtoken) => {
        
        if(err){
            console.log("Invalid token");
            res.clearCookie("token"); 
            res.send(err);

        }
        
         //Decode token and extrect user data 
        console.log("Valid token");
        next();
    })

    

}


module.exports = {
    isLoggedIn, 
 
}