import { combineReducers } from 'redux';
import  homeReducer  from './app/home/duck';
import  recipeReducer  from './app/recipe/duck';
import  navReducer  from './app/topnav/duck';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  home: homeReducer,
  recipe: recipeReducer,
  nav: navReducer,
  form: formReducer
});

export default rootReducer;
