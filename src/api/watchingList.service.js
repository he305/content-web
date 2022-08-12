import api from './axios';

const API_URL = '/watchingList';

const getWatchingList = () => {
    return api.get(API_URL);
}

const addWatchingListEntry = (entryName, accounts) => {
    const endPoint = '/add';
    return api.post(API_URL + endPoint, {
        data: {
            name: entryName,
            accounts: accounts
        }
    }).then((response) => {
        console.log(response);
    })
}

const updateEntry = (entryName, accounts) => {
    return api.put(API_URL, {
        data: {
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
    getAccountPlatforms,
    updateEntry
}

export default watchingListService;