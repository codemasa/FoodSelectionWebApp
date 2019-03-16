import { combineReducers } from 'redux';
import  homeReducer  from './app/home/duck';
import  recipeReducer  from './app/recipe/duck';
import  navReducer  from './app/topnav/duck';
import  reviewReducer  from './app/review/duck';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  home: homeReducer,
  recipe: recipeReducer,
  nav: navReducer,
  review: reviewReducer,
  form: formReducer
});

export default rootReducer;
