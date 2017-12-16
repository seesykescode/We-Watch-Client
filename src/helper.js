import axios from 'axios'


       export const request = axios.create({
            baseURL: 'http://We-Watch-Twitch-Server.herokuapp.com',
            withCredentials: true
        })




