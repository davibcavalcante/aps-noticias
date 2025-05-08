import axios from 'axios';

export const rssFetch = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/rss/list',
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
});

export const aiFetch = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/classify',
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
});

export const networkFetch = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/network',
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
});