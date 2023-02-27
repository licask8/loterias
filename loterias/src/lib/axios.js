import axios from 'axios'

export const api = axios.create({
    baseURL: "https://loteriascaixa-api.herokuapp.com/api"
})