import axios from 'axios';

export const rssFetch = axios.create({
    baseURL: 'http://127.0.0.1:8000/rss',
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
});