import axios from "../utils/axiosCustomize"

const postLogin = (userEmail, userPassword) => {
    return axios.post(`users`, { username: userEmail, password: userPassword }, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
const postRegister = (userEmail, userPassword, userName, userPhone, userRole) => {
    return axios.post(`api/v1/register`, { email: userEmail, username: userName, password: userPassword });
}
export { postLogin, postRegister }