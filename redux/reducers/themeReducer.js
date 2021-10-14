import { CHANGE_THEME } from '../constants/themeConstants';

const initialState = {
  theme: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME:
      state.theme = !state.theme;
      return { ...state };

    default:
      return state;
  }
};

export default themeReducer;
