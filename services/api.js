import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://fliffoxojbksaukkuapv.supabase.co/rest/v1',
    headers: {
        apikey: "YOUR APIKEY HERE",
        authorization: "Bearer YOUR APIKEY HERE"
    }
})