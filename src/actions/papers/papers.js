import jwt_decode from 'jwt-decode';
import { post, get } from '../../api/main.api';
import { history } from '../../routers/AppRouter';
import { clearUploadedFiles } from '../files/file';
import { loadingState } from '../loading/loading';
import {
  LOGIN,
  LOGOUT,
  TOAST_MESSAGE,
  ADD_PAPER,
  LOAD_PAPERS,
  SELECT_PAPER,
} from '../types';

export const addPapareAction = (data) => ({
  type: ADD_PAPER,
  data,
});
export const loadPaperAction = (data) => ({
  type: LOAD_PAPERS,
  data,
});
export const selectPaperAction = (data) => ({
  type: SELECT_PAPER,
  data,
});

export const createPaper = (data, closeModel) => (dispatch) => {
  dispatch(loadingState(true));
  post(`/quactions`, data)
    .then(({ data }) => {
      if (data && data.status) {
        dispatch(addPapareAction(data));
        dispatch(loadingState(false));
        closeModel();
        
        dispatch({
          type: TOAST_MESSAGE,
          status: true,
          message: 'question paper submition',
        });

        dispatch(clearUploadedFiles());
      } else {
        throw new Error(data.msg || 'question paper submition failed');
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
export const loadPapers =
  (quary = '') =>
  (dispatch) => {
    dispatch(loadingState(true));
    get(`/papers${quary}`)
      .then(({ data }) => {
        if (data && data.status) {
          dispatch(loadPaperAction(data.data.value));
          dispatch(loadingState(false));
        } else {
          throw new Error(data.msg || 'paper load failed');
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

export const selectPaper = (id) => (dispatch) => {
  dispatch(loadingState(true));
  get(`/papers/${id}`)
    .then(({ data }) => {
      if (data && data.status) {
        dispatch(selectPaperAction(data.data));
        dispatch(loadingState(false));
      } else {
        throw new Error(data.msg || 'paper load failed');
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
