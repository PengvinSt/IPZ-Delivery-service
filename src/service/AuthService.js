import api from "../http req/core";

export default class AuthService {
    static async login(username, password) {
        return api.post('/user/login', {username, password})
    }
    static async registration(username, email, password) {
        return api.post('/user/registration', {username, email, password})
    }
    static async logout() {
        return api.post('/user/logout')
    }
}