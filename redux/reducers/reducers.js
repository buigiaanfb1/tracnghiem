import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import { questionListReducer } from './questionsReducer';
import { authReducer } from './userReducer';

const reducers = combineReducers({
  theme: themeReducer,
  questionList: questionListReducer,
  auth: authReducer,
});

export default reducers;
