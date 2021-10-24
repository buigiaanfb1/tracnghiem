import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import { questionListReducer } from './questionsReducer';

const reducers = combineReducers({
  theme: themeReducer,
  questionList: questionListReducer,
});

export default reducers;
