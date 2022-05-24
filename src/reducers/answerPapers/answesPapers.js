import { LOAD_ANSWER_PAPERS,SELECT_ANSWER_PAPER} from '../../actions/types';

const intialState={
  answerPapers:[],
  selectedAnswerPaper:[],
};

export default (state = intialState, action) => {

  switch (action.type) {
    case LOAD_ANSWER_PAPERS:
      return {
        ...state,
        answerPapers: action.data,
      };
      case SELECT_ANSWER_PAPER:
        return {
        ...state,
        selectedAnswerPaper: action.data,
      };
    default:
      return state;
  }
};
