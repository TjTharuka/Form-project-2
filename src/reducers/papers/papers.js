import { LOAD_PAPERS,SELECT_PAPER} from '../../actions/types';

const intialState={
  papers:[],
  selectedPaper:[],
};

export default (state = intialState, action) => {
  switch (action.type) {
    case LOAD_PAPERS:
      return {
        ...state,
        papers: action.data,
      };
      case SELECT_PAPER:
        return {
        ...state,
        selectedPaper: action.data,
      };
    default:
      return state;
  }
};
