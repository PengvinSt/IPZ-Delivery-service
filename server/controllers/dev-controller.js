const UserSchema = require('../models/User/User.js')
const RoleSchema = require('../models/User/Role.js')
class DevController {
    async devFun(req,res){
        try {
            res.json('server is working')
            // cons userData = new UserSchema..create({username})


        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new DevController()