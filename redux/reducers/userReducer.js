import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  CLEAR_ERRORS,
} from '../constants/userConstants';

// All reducer
export const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
      };

    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case REGISTER_USER_FAIL:
      return {
        loading: false,
      };

    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};

export const loadedUserReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOAD_USER_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};
