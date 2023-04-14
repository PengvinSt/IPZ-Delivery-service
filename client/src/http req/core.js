import axios from 'axios'

export const API_URL = 'http://localhost:5000/api'

const api = axios.create({withCredentials:true,baseURL: API_URL})

api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

api.interceptors.response.use((config) =>{
    return config;
}, 
    async (error)=>{
        const originalReq = error.config;
        if (error.response.status === 401 && error.config && !originalReq._isRetry){
            originalReq._isRetry = true; 
            try {
                const res =  await axios.get(`${API_URL}/user/refresh`, {withCredentials: true});
                localStorage.setItem('token', res.data.accessToken);
                return api.request(originalReq);
            } catch (error) {
                console.log(error);
            }
        }
        throw error;
    }
)

export default api;