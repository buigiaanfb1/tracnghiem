import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import {
  GET_TRENDING_COURSES_LIST_FAIL,
  GET_TRENDING_COURSES_LIST_REQUEST,
  GET_TRENDING_COURSES_LIST_SUCCESS,
  GET_COURSE_BY_SLUG_FAIL,
  GET_COURSE_BY_SLUG_SUCCESS,
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

export const courseBySlug = (req, id) => async (dispatch) => {
  try {
    let slugId = id.substring(id.lastIndexOf('-') + 1, id.length);
    const { origin } = absoluteUrl(req);
    let url;
    if (req) {
      url = `${origin}/api/course?id=${slugId}`;
    } else {
      url = `/api/course?id=${slugId}`;
    }
    const { data } = await axios.get(url);
    dispatch({
      type: GET_COURSE_BY_SLUG_SUCCESS,
      payload: data.course,
    });
  } catch (error) {
    dispatch({
      type: GET_COURSE_BY_SLUG_FAIL,
      payload: error.response.data.message,
    });
  }
};
