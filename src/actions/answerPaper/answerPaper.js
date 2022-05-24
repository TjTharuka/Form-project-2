import jwt_decode from 'jwt-decode';
import { post,get } from '../../api/main.api';
import { history } from '../../routers/AppRouter';
import { loadingState } from '../loading/loading';
import { TOAST_MESSAGE,LOAD_ANSWER_PAPERS,SELECT_ANSWER_PAPER } from '../types';

export const loadAnswersAction = (data) => ({
  type: LOAD_ANSWER_PAPERS,
  data,
});
export const selectAnswersAction = (data) => ({
  type: SELECT_ANSWER_PAPER,
  data,
});


export const submitAnswerPaper = (data,removeModel) => (dispatch) => {
  dispatch(loadingState(true));
  post(`/userAnswers`, data)
  .then(({ data }) => {
    if (data && data.status) {
      dispatch({
        type: TOAST_MESSAGE,
        status: true,
        message: 'Answer Paper Submition Successfull',
      });
      removeModel();
      dispatch(loadingState(false));
      } else {
        throw new Error(data.msg || 'Answer paper submition failed');
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


export const loadAnswerPapers = (quary="") => (dispatch) => {
  dispatch(loadingState(true));
  get(`/userAnswers${quary}`)
  .then(({ data }) => {
    if (data && data.status) {
      dispatch(loadAnswersAction(data.data.value));
      dispatch(loadingState(false));
      } else {
        throw new Error(data.msg || 'Answer paper submition failed');
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

export const selectAnswerPapers = (id) => (dispatch) => {
  dispatch(loadingState(true));
  get(`/userAnswers/${id}`)
  .then(({ data }) => {
    if (data && data.status) {
      dispatch(selectAnswersAction(data.data));
      dispatch(loadingState(false));
      } else {
        throw new Error(data.msg || 'Answer paper submition failed');
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
