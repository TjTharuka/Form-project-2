import jwt_decode from 'jwt-decode';
import { post, postFormData } from '../../api/main.api';
import { history } from '../../routers/AppRouter';
import { loadingState } from '../loading/loading';
import store from '../../store/configureStore';
import { ADD_FILE, TOAST_MESSAGE, ADD_PAPER_NOW, CLEAR_UPLOADED_FILES } from '../types';
import { async } from 'regenerator-runtime';

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
  try{
        dispatch(loadingState(true));
        // set all quaction to state
        await quactionArray.map(async(quaction) =>{


          // if quaction type image
          if (quaction?.fileId) {
            // upload image file
            const {data}=await postFormData(`/files`, quaction.fileId);

            if (data && data.status) {
              // set original file uploaded
              quaction.fileId = data.data._id;

              // add  quaction with file
              dispatch(addFile(quaction));
            } else {
              throw new Error(data.msg || 'file upload failed');
            }
          
          } else {
          // if quaction type text

            // set state to quaction
            dispatch(addFile(quaction));
          }
        });

        dispatch(addPaperNow());

    }
    catch(error){
        dispatch({
          type: TOAST_MESSAGE,
          status: false,
          message: error.response ? error.response.data.msg : error.message,
        });
        dispatch(loadingState(false));
    }

  };
