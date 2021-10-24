import {
  GET_QUESTION_LIST_FAIL,
  GET_QUESTION_LIST_REQUEST,
  GET_QUESTION_LIST_SUCCESS,
  GET_QUESTION_DETAIL,
  CHOSEN_QUESTION,
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
    case CHOSEN_QUESTION:
      let { questionId, answerId } = payload;
      let index = state.questionList.findIndex((question) => {
        return question.id === questionId;
      });
      state.questionList[index].selected = answerId.toString();
      return { ...state };
    default:
      return state;
  }
};
