module.exports = class UserClear {
    username;
    id;
    roles;
    constructor(params){
        this.username = params.username;
        this.id = params._id;
        this.roles = params.roles;
    }
}