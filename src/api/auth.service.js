import api from './axios';
import TokenService from './token.service'

const API_URL = '/auth';

const register = (username, password) => {
    console.log(username, password);
    return api.post(API_URL + "/register", {
        username :username,
        password: password
    })
    .then((response) => {
        console.log(response);
        if (response.data.token) {
            TokenService.setUser(response.data);
        }
        
        return response.data;
    })
}

const login = (username, password) => {
    return api.post(API_URL + "/login", {
        username,
        password
    })
    .then((response) => {
        console.log(response);
        if (response.data.token) {
            TokenService.setUser(response.data);
        }
        
        return response.data;
    })
}

const logout = () => {
    TokenService.removeUser();
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

const authService = {
    register,
    login,
    logout,
    getCurrentUser
}

export default authService;
