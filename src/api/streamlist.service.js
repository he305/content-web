import api from './axios';

const API_URL = '/stream-list';

const getStreamList = () => {
    return api.get(API_URL);
}

const streamListService = {
    getStreamList
}

export default streamListService;