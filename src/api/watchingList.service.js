import api from './axios';

const API_URL = '/watchingList';

const getWatchingList = () => {
    return api.get(API_URL);
}

const addWatchingListEntry = (entryName, accounts) => {
    const endPoint = '/add';
    return api.post(API_URL + endPoint, {
        entry: {
            name: entryName,
            accounts: accounts
        }
    }).then((response) => {
        console.log(response);
    })
}

const getAccountPlatforms = () => {
    // TODO
    return [
        "TWITCH",
        "WASD"
    ]
}

const watchingListService = {
    getWatchingList,
    addWatchingListEntry,
    getAccountPlatforms
}

export default watchingListService;