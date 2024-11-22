import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer, // Đặt nhánh `user` trong Redux Store
});

export default rootReducer;
