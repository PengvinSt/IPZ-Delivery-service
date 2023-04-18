const bcrypt = require('bcrypt')
const TokenService = require('./token-service.js')
const UserSchema = require('../models/User/User.js')
const PartnerSchema = require('../models/User/Partner.js')
const UserClear = require('../utils/userClear.js')
const RoleSchema = require('../models/User/Role.js')
const ApiError = require('../utils/apiError.js')



class UserService {
    async registration(username, email, password) {
        const candidateByEmail = await UserSchema.findOne({email})
        const candidateByUsername = await UserSchema.findOne({username})
        if(candidateByEmail){
            // return `User with ${email} email already exists`
            throw ApiError.BadRequestError(`User with ${email} email already exists`)
        }
        if(candidateByUsername){
            // return `User with ${username} username already exists`
            throw ApiError.BadRequestError(`User with ${username} username already exists`)
        }

        const hashPass = await bcrypt.hash(password, 4)
        const userRole = await RoleSchema.findOne({value:'USER'})// "ADMIN"
        const user = await UserSchema.create({username, email, password:hashPass, roles: userRole.value})
        const infoUser = new UserClear(user)
        return {user: infoUser}
    }

    async login(username, password) {
        const user = await UserSchema.findOne({username})
        if(!user){
            // return `Uncorrect login or password`
            throw ApiError.BadRequestError(`Uncorrect login or password`)
        }
        const verifiedPass = await bcrypt.compare(password,user.password)
        if(!verifiedPass){
            // return `Uncorrect login or password`
            throw ApiError.BadRequestError(`Uncorrect login or password`)
        }
        const infoUser = new UserClear(user)
        const userTokens = TokenService.createToken({...infoUser});
        await TokenService.saveToken(infoUser.id, userTokens.refreshToken)
        return {...userTokens, user:infoUser}
    }

    async logout(refreshToken) {
        const token = await TokenService.removeToken(refreshToken)
        return token;
    }

    async refresh(refreshToken) {
        if(!refreshToken){
            throw ApiError.UnauthorizedError()
        }
        const userData = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await TokenService.findToken(refreshToken)
        if(!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await UserSchema.findById(userData.id)
        const infoUser = new UserClear(user)
        const userTokens = TokenService.createToken({...infoUser});
        await TokenService.saveToken(infoUser.id, userTokens.refreshToken)
        return {...userTokens, user:infoUser};
    }


    async createPartner(name, email, phone){
        const partnerData = await PartnerSchema.create({name, email, phone})
        return {partnerData}
    }

    async getPartners(){
        const partnerData = await PartnerSchema.find()
        return {partnerData}
    }
    async deletePartners(id){
        const partnerData = await PartnerSchema.deleteOne({_id:id})
        return {partnerData}
    }
}

module.exports = new UserService();