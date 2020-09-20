import { getApiUrl } from './helper';
import axios from 'axios';

export default function transportLayer() {
    const getData = () => axios.post(getApiUrl('Basic', 'Coordinator'), {});

    return {
        getData
    }
}