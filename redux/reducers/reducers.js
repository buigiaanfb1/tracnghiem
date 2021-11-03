import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import { questionListReducer } from './questionsReducer';
import { authReducer } from './userReducer';
import { coursesTrendingListReducer } from './courseReducer';

const reducers = combineReducers({
  theme: themeReducer,
  questionList: questionListReducer,
  auth: authReducer,
  trending: coursesTrendingListReducer,
});

export default reducers;
