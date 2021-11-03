import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import {
  GET_TRENDING_COURSES_LIST_FAIL,
  GET_TRENDING_COURSES_LIST_REQUEST,
  GET_TRENDING_COURSES_LIST_SUCCESS,
} from '../constants/courseConstants';
export const trendingCourses = (req) => async (dispatch) => {
  try {
    dispatch({
      type: GET_TRENDING_COURSES_LIST_REQUEST,
    });
    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/courses/trending`);
    if (data) {
      dispatch({
        type: GET_TRENDING_COURSES_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TRENDING_COURSES_LIST_FAIL,
      //   payload: err.response.data.message,
    });
  }
};
