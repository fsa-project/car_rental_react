import axios from "../utils/axiosCustomize"

const postLogin = (userEmail, userPassword) => {
    axios.defaults.withCredentials = true;
    return axios.post(`auth/login`, { username: userEmail, password: userPassword }, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
const postRegister = (userEmail, userPassword, userName, userPhone, userRole) => {
    return axios.post(`api/v1/register`, { email: userEmail, username: userName, password: userPassword });
}

const refreshToken = () => {
    axios.defaults.withCredentials = true;
    return axios.get(`auth/refresh`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

const getUserCars = () => {
    axios.defaults.withCredentials = true;
    return axios.get(`cars/user-cars`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
export { postLogin, postRegister, getUserCars, refreshToken }