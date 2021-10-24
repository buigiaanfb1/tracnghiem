import {
  GET_QUESTION_LIST_FAIL,
  GET_QUESTION_LIST_REQUEST,
  GET_QUESTION_LIST_SUCCESS,
  CHOSEN_QUESTION,
} from '../constants/questionConstants';
import question from '../../common/questions.json';
// Get all Question
export const getQuestionList = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_QUESTION_LIST_SUCCESS,
      payload: question,
    });
  } catch (error) {
    dispatch({
      type: GET_QUESTION_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const chosenQuestion = (questionId, answerId) => async (dispatch) => {
  dispatch({
    type: CHOSEN_QUESTION,
    payload: { questionId, answerId },
  });
};

//
