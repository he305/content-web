import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081';

const getWatchingList = () => {
    return axios.get(API_URL + '/watchingList', {headers: authHeader()});
}

const watchingListService = {
    getWatchingList
}

export default watchingListService;