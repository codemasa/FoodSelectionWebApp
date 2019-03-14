import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  addRecipeToBasket: ['text'],
  requestRecipeByID: ['textData'],
  receiveRecipeByID: ['recipeData']
});

export { Creators, Types };
