import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://e-undang.herokuapp.com/api"
    // baseURL : "http://localhost:5000/api"
})