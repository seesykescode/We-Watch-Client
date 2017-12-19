import axios from 'axios'

       export const request = axios.create({
            baseURL: 'https://We-Watch-Twitch-Server.herokuapp.com',
            withCredentials: true
        })




