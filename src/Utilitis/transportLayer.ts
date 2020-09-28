// import { getApiUrl } from './helper';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export default function transportLayer() {
    const getData = () => axios.get(`${baseUrl}/posts`);

    return {
        getData
    }
}

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log('error', error.response.status);
    // (window as any).location = '/login';
    if (401 === error.response.status) {
        
    } else {
        return Promise.reject(error);
    }
});