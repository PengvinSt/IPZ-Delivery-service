const jwt = require('jsonwebtoken')

module.exports = function(roles) {
    return function(req, res, next){
        if(req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return res.status(401).json({msg: "User not authorized"})
            }
            decodedToken = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            
            const isAccess = decodedToken.roles.filter(role => role === roles)

            if(isAccess.length === 0) {
                return res.status(403).json({msg: "User not allowed"})
            }
            else{
                next()
            }
        } catch (error) {
            return res.status(401).json({msg: "User not authorized"})
        }
    }
}
