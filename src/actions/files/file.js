import jwt_decode from 'jwt-decode';
import { post, postFormData } from '../../api/main.api';
import { history } from '../../routers/AppRouter';
import { loadingState } from '../loading/loading';
import store from '../../store/configureStore';
import { ADD_FILE, TOAST_MESSAGE, ADD_PAPER_NOW, CLEAR_UPLOADED_FILES } from '../types';

export const addFile = (data) => ({
  type: ADD_FILE,
  data,
});
export const clearUploadedFiles = (data) => ({
  type: CLEAR_UPLOADED_FILES,
});
export const addPaperNow = (data) => ({
  type: ADD_PAPER_NOW,
});

export const fileUpload =(quactionArray = []) =>async (dispatch) => {

    dispatch(loadingState(true));

    await quactionArray.map((quaction) => {
      
      // if quaction type image
      if (quaction?.fileId) {
        // upload image file
        postFormData(`/files`, quaction.fileId)
        .then(({ data }) => {
          if (data && data.status) {
            // set original file uploaded
            quaction.fileId = data.data._id;
            dispatch(addFile(quaction));
            dispatch(loadingState(false));
          } else {
            throw new Error(data.msg || 'file upload failed');
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
      } else {
        // if quaction type text
        console.log(`111`);

        // set state to quaction
        dispatch(addFile(quaction));
        // set state loading state false
        dispatch(loadingState(false));
      }
    });

    dispatch(addPaperNow());
  };
