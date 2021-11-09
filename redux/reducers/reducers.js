import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import { questionListReducer } from './questionsReducer';
import { authReducer, loadedUserReducer } from './userReducer';
import {
  coursesTrendingListReducer,
  courseDetailsReducer,
} from './courseReducer';

const reducers = combineReducers({
  theme: themeReducer,
  questionList: questionListReducer,
  auth: authReducer,
  trending: coursesTrendingListReducer,
  loadedUser: loadedUserReducer,
  courseDetails: courseDetailsReducer,
});

export default reducers;
