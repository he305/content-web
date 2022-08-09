import axios from 'axios';

const API_URL = 'http://localhost:8081/api/auth';

const register = (username, password) => {
    console.log(username, password);
    return axios.post(API_URL + "/register", {
        username :username,
        password: password
    }, {
        headers: {
            'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
    })
    .then((response) => {
        console.log(response);
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        
        return response.data;
    })
}

const login = (username, password) => {
    return axios.post(API_URL + "/login", {
        username,
        password
    })
    .then((response) => {
        console.log(response);
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        
        return response.data;
    })
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const authService = {
    register,
    login,
}

export default authService;
