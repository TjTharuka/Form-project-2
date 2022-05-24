import { ADD_FILE,ADD_PAPER_NOW } from '../../actions/types';

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
    default:
      return {...state};
  }
};
