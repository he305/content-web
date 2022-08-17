import axios from 'axios';
import TokenService from './token.service'

const instance =  axios.create({
    baseURL: 'http://localhost:8081/api',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = TokenService.getLocalAccessToken();
        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== "/auth/login" && err.response) {
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    const rs = await instance.post("/auth/refresh", {
                        refreshToken: TokenService.getLocalRefreshToken(),
                    });
                    const { token } = rs.data;
                    TokenService.updateLocalAccessToken(token);
                    return instance(originalConfig);
                } catch (_error) {
                    TokenService.removeUser();
                    window.location.replace('/');
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err);
    }
);

export default instance;
