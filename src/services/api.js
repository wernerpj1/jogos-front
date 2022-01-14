import axios from 'axios'

const api = axios.create({
    baseURL: `https://localhost:5001/`,
});
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

export default api;