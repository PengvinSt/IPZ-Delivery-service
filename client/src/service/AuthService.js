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
    static async createPartner (name, email, phone) {
        return api.post('/user/partner', {name, email, phone})
    }
    static async getPartners () {
        return api.get('/user/getpartner')
    }
    static async deletePartners (id) {
        return api.post('/user/deletepartner', {id})
    }
}