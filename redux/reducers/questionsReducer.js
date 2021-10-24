import {
  GET_QUESTION_LIST_FAIL,
  GET_QUESTION_LIST_REQUEST,
  GET_QUESTION_LIST_SUCCESS,
  CHOSEN_QUESTION_CHECKBOXES,
  CHOSEN_QUESTION_RADIO,
} from '../constants/questionConstants';
// Question List reducer
export const questionListReducer = (
  state = { questionList: [] },
  { payload, type }
) => {
  switch (type) {
    case GET_QUESTION_LIST_REQUEST:
      return {
        loading: true,
      };
    case GET_QUESTION_LIST_SUCCESS:
      return {
        questionList: payload,
        loading: false,
        success: true,
      };
    case GET_QUESTION_LIST_FAIL:
      return {
        loading: false,
        success: false,
      };
    case CHOSEN_QUESTION_RADIO: {
      let { questionId, answerId } = payload;
      let index = state.questionList.findIndex((question) => {
        return question.id === questionId;
      });
      if (answerId) {
        state.questionList[index].selected = answerId.toString();
      } else {
        delete state.questionList[index].selected;
      }
      return { ...state };
    }

    case CHOSEN_QUESTION_CHECKBOXES: {
      let { questionId, answerId } = payload;
      let index = state.questionList.findIndex((question) => {
        return question.id === questionId;
      });
      if (answerId) {
        state.questionList[index].selected = answerId;
      } else {
        delete state.questionList[index].selected;
      }
      return { ...state };
    }
    default:
      return state;
  }
};
