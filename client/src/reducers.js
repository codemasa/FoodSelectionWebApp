import { combineReducers } from 'redux';
import  homeReducer  from './app/home/duck';
import  recipeReducer  from './app/recipe/duck';

const rootReducer = combineReducers({
  home: homeReducer,
  recipe: recipeReducer
});

export default rootReducer;
