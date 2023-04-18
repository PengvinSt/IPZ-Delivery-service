import AuthService from "../service/AuthService";
import axios from "axios";
import { API_URL } from "../http req/core";
import {makeAutoObservable} from "mobx"


export default class StoreUser {
    user={}
    partners = []
    role = "";
    isAuth = false;
    error = '';
    constructor(){
        makeAutoObservable(this);
    }

    setPartners(partners){
        this.partners = partners;
    }

    setAuth(bool) { 
        this.isAuth = bool;
    }

    setUser(user){
        this.user = user;
    }
    setRole(role){
        this.role = role;
    }
    setError(error){
        this.error = error;
    }

    async login(username,password){
        try {
            const res = await AuthService.login(username,password)
            localStorage.setItem('token', res.data.accessToken);
            if(res.status === 200){
                this.setAuth(true);
                this.setUser(res.data.user);
                this.setRole(res.data.user.roles[0])
                this.setError('')
            }
        } catch (error) {
            this.setError(error.response.data.message)
        }
    }
    async registration(username,email,password){
        try {
            const res = await AuthService.registration(username,email,password)
            if(res.status === 200){
                this.setError('Successfully registered')
            }
        } catch (error) {
            this.setError(error.response.data.message)
        }
    }
    async logout(){
        try {
            const res = await AuthService.logout()
            this.setRole("")
            this.setAuth(false);
            this.setUser({});
            localStorage.clear()
            console.log(res);
        } catch (error) {
            this.setError(error.response.data)
        }
    }

    async checkAuth() {
        try {
            const res = await axios.get(`${API_URL}/user/refresh`, {withCredentials: true})
            localStorage.setItem('token', res.data.accessToken);
            this.setAuth(true);
            this.setUser(res.data.user);
            this.setRole(res.data.user.roles[0])
            console.log(res);
        } catch (error) {
            this.setError(error.response.data)
        }
    }

    async createPartner(name, email, phone){
        try {
            const res = await AuthService.createPartner(name, email, phone)
            console.log(res);
        } catch (error) {
            this.setError(error.response.data.message)
        }
    }

    async getPartners(){
        try {
            const res = await AuthService.getPartners()
            this.setPartners(res.data.partnerData)
        } catch (error) {
            this.setError(error.response.data)
        }
    }

    async deletePartners(id){
        try {
            const res = await AuthService.deletePartners(id)
            console.log(res)
        } catch (error) {
            this.setError(error.response.data)
        }
    }
}