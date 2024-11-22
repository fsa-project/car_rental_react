import { FETCH_USER_LOGIN_SUCCESS, LOGOUT_USER } from '../action/userAction';

const INITIAL_STATE = {
    account: {
        access_token: '',
        email: '',
        name: '',
        role: {}
    },
    isAuthenticated: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            return {
                ...state,
                account: action.payload,
                isAuthenticated: true
            };
        case LOGOUT_USER:
            return {
                ...state,
                account: {
                    access_token: '',
                    email: '',
                    name: '',
                    role: {}
                },
                isAuthenticated: false
            };
        default:
            return state;
    }
};

export default userReducer;
