import axios from 'axios';

// Action Types
export const FETCH_USER_LOGIN_SUCCESS = 'FETCH_USER_LOGIN_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';

// Action Creators
export const loginUser = (data) => (dispatch) => {
    try {
        // Lưu thông tin vào localStorage
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Dispatch action để cập nhật Redux Store
        dispatch({
            type: FETCH_USER_LOGIN_SUCCESS,
            payload: { user: data.user, access_token: data.access_token },
        });
    } catch (error) {
        console.error('Failed to handle login data:', error);
    }
};

export const logoutUser = () => (dispatch) => {
    // Xóa thông tin người dùng
    dispatch({
        type: LOGOUT_USER,
    });
};

export default loginUser