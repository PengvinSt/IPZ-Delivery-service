import AuthService from "../service/AuthService";
import axios from "axios";
import { API_URL } from "../http req/core";
import {makeAutoObservable} from "mobx"


export default class StoreUser {
    user={}
    // response="";
    role = "";
    isAuth = false;
    constructor(){
        makeAutoObservable(this);
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

            this.setAuth(true);
            this.setUser(res.data.user);
            this.setRole(res.data.user.roles[0])
            console.log(res.data.user.roles[0])
            console.log(res);
            console.log(this.user)
            console.log(this.isAuth)
            console.log(this.role)
        } catch (error) {
            console.log(error.response.data.message)
            this.setError(error.response.data.message)
        }
    }
    async registration(username,email,password){
        try {
            const res = await AuthService.registration(username,email,password)

            console.log(res);
            console.log(this.user)
            console.log(this.isAuth)
            console.log(res.data.user.roles[0])

        } catch (error) {
            console.log(error.response.data)
            this.setError(error.response.data)
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
            console.log(this.role)
            // console.log(this.user)
            // console.log(this.isAuth)
        } catch (error) {
            console.log(error.response.data)
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
            console.log(this.user)
            console.log(this.role)
            console.log(res.data.user.roles[0])
        } catch (error) {
            console.log(error.response.data)
            this.setError(error.response.data)
        }
    }
}