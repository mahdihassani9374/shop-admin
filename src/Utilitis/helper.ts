import axios from 'axios';

export const getApiUrl = (controller: string, action: string) => {
    return `https://api.mahdi.hassani.ir/${controller}/${action}`;
}

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        console.log('error 401 mahdi hassani');
    }
    return error;
});