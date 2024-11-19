
import { INCREMENT, DECREMENT } from '../action/counterAction';
import { FETCH_USER_LOGIN_SUCCESS } from '../action/userAction';


const INITIAL_STATE = {
    account: {
        access_token: '',
        email: '',
        name: '',
    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    console.log('check actions', action.type);
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:

            return {
                ...state, account: {
                    access_token: action?.payload?.data?.access_token,
                    email: action?.payload?.data?.user?.email,
                    name: action?.payload?.data?.user?.username
                    // image: action?.payload?.DT?.image,
                    // role: action?.payload?.DT?.role
                },
                isAuthenticated: true
            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;