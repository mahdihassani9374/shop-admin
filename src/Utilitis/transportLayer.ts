// import { getApiUrl } from './helper';
import axios from 'axios';

export default function transportLayer() {
    const getData = () => axios.get('http://localhost:3000/postss');

    return {
        getData
    }
}

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log('error')
    if (401 === error.response.status) {

    } else {
        return Promise.reject(error);
    }
});