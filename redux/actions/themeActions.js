import { CHANGE_THEME } from '../constants/themeConstants';

export const toggleTheme = () => async (dispatch) => {
  dispatch({
    type: CHANGE_THEME,
  });
};
