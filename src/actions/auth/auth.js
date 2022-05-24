import jwt_decode from 'jwt-decode';
import { post } from '../../api/main.api';
import { history } from '../../routers/AppRouter';
import { loadingState } from '../loading/loading';
import { LOGIN, LOGOUT, TOAST_MESSAGE } from '../types';

export const userLogin = (data) => ({
  type: LOGIN,
  data,
});

export const loginUser = (data) => (dispatch) => {
  dispatch(loadingState(true));
  post(`/users/login`, data)
    .then(({ data }) => {
      if (data && data.status && data.data) {
        localStorage.setItem('user_accessToken', data.data);
        dispatch(userLogin(jwt_decode(data.data)));
        // history.push('/');
        dispatch(loadingState(false));
      } else {
        throw new Error(data.msg || 'Login failed');
      }
    })
    .catch((error) => {
      dispatch({
        type: TOAST_MESSAGE,
        status: false,
        message: error.response ? error.response.data.msg : error.message,
      });
      dispatch(loadingState(false));
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch(loadingState(true));
  if (localStorage.getItem('user_accessToken')) {
    localStorage.removeItem('user_accessToken');
  }
  dispatch({
    type: LOGOUT,
  });
  dispatch(loadingState(false));
};

export const registerUser = (userData) => (dispatch) => {
  dispatch(loadingState(true));
  post(`/users/`, userData)
    .then(({ data }) => {
      if (data && data.status) {
        if (data.data.email && data.data.password) {
          dispatch(
            loginUser({
              email: userData.email,
              password: userData.password,
            })
          );
          dispatch(loadingState(false));
        }
      } else {
        throw new Error(data.msg || 'User registration failed');
      }
    })
    .catch((error) => {
      dispatch({
        type: TOAST_MESSAGE,
        status: false,
        message: error.response ? error.response.data.msg : error.message,
      });
      dispatch(loadingState(false));
    });
};
