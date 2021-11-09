import {
  GET_TRENDING_COURSES_LIST_REQUEST,
  GET_TRENDING_COURSES_LIST_SUCCESS,
  GET_TRENDING_COURSES_LIST_FAIL,
  GET_COURSE_BY_SLUG_FAIL,
  GET_COURSE_BY_SLUG_REQUEST,
  GET_COURSE_BY_SLUG_SUCCESS,
  CLEAR_ERRORS,
} from '../constants/courseConstants';
// Question List reducer
export const coursesTrendingListReducer = (
  state = { trendingCourses: [] },
  { payload, type }
) => {
  switch (type) {
    case GET_TRENDING_COURSES_LIST_REQUEST:
      return {
        loading: true,
      };
    case GET_TRENDING_COURSES_LIST_SUCCESS:
      return {
        trendingCourses: payload.trendingCourses,
        loading: false,
        success: payload.success,
      };
    case GET_TRENDING_COURSES_LIST_FAIL:
      return {
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};

export const courseDetailsReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case GET_COURSE_BY_SLUG_SUCCESS:
      return {
        course: action.payload,
      };

    case GET_COURSE_BY_SLUG_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
