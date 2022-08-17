import api from './axios';

const API_URL = '/watching-list';

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

const deleteEntry = (entryName) => {
    return api.delete(API_URL, 
        {
            data: {
                entryName: entryName
            }
        }
    ).then((response) => {
        console.log(response);
    })
}

const getNotifications = (contentAccountName, platform) => {
    return api.post(API_URL + '/notification', {
        contentAccountName: contentAccountName,
        platform: platform
    });
}

const getAccountPlatforms = () => {
    const endPoint = '/platforms';
    return api.get(API_URL + endPoint)
}

const watchingListService = {
    getWatchingList,
    addWatchingListEntry,
    getAccountPlatforms,
    updateEntry,
    deleteEntry,
    getNotifications
}

export default watchingListService;