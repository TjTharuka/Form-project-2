import jwt_decode from 'jwt-decode';
import { post, postFormData } from '../../api/main.api';
import { history } from '../../routers/AppRouter';
import { loadingState } from '../loading/loading';
import store from '../../store/configureStore';
import { ADD_FILE, TOAST_MESSAGE, ADD_All_QUACTIONS, CLEAR_ALL_QUACTION } from '../types';
import { async } from 'regenerator-runtime';

export const addFile = (data) => ({
  type: ADD_FILE,
  data,
});
export const addAllQuactions = (data) => ({
  type: ADD_All_QUACTIONS,
  data,
});
export const clearAllQuactions = (data) => ({
  type: CLEAR_ALL_QUACTION,
});

export const fileUpload =(quactionArray = []) =>async (dispatch) => {
  try{
        dispatch(loadingState(true));
        
        // if empty questions
        if(!quactionArray.length){
          dispatch({
            type: TOAST_MESSAGE,
            status: false,
            message: "no questions",
          });
          
          return dispatch(loadingState(false));
        }

        // set all quaction to state
        await quactionArray.map(async(quaction,index) =>{
          // if quaction type image
          if (quaction?.fileId) {

            const indexSaved=index;
            
            // add  quaction with file
            dispatch(addAllQuactions({...quaction,fileId:true}));
            
            // upload image file
            const {data}=await postFormData(`/files`, quaction.fileId);
            if (data && data.status) {
              // set original file uploaded
              quaction.fileId = data.data._id;

              // add  quaction with file
              dispatch(addFile({...quaction,index:indexSaved}));
            } else {
              throw new Error(data.msg || 'file upload failed');
            }
          
          } 
          // if quaction type text
          else {

            // set state to quaction
            dispatch(addAllQuactions(quaction));
          }
        });


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
