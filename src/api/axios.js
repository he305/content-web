import axios from 'axios';
import TokenService from './token.service'

const getBaseUrl = () => {
    console.log(process.env.REACT_APP_API_IP)
    if (process.env.REACT_APP_API_IP !== undefined) {
        return "http://" + process.env.REACT_APP_API_IP + ":" + process.env.REACT_APP_API_PORT + "/api";
    }
    return "http://localhost:8081/api"
}

const instance =  axios.create({
    baseURL: getBaseUrl(),
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
