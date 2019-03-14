import { combineReducers } from 'redux';
import  homeReducer  from './app/home/duck';
import  recipeReducer  from './app/recipe/duck';
import  navReducer  from './app/topnav/duck';

const rootReducer = combineReducers({
  home: homeReducer,
  recipe: recipeReducer,
  nav: navReducer
});

export default rootReducer;
