import {
  GET_TRENDING_COURSES_LIST_REQUEST,
  GET_TRENDING_COURSES_LIST_SUCCESS,
  GET_TRENDING_COURSES_LIST_FAIL,
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
