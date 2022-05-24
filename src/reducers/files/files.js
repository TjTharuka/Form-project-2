import { ADD_FILE,ADD_PAPER_NOW, CLEAR_UPLOADED_FILES } from '../../actions/types';

const intialState={
  uplodedFiles:[],
  addPaperState:false,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_FILE:
      return {
        uplodedFiles: [...state.uplodedFiles,action.data],
      };
    case ADD_PAPER_NOW:
      return {
        ...state,
        addPaperState: true,
      };
    case CLEAR_UPLOADED_FILES:
      return {
        ...state,
        uplodedFiles: [],
      };
    default:
      return {...state};
  }
};
