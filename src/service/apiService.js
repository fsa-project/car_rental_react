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
export { postLogin, postRegister }