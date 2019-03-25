import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  addRecipeToBasket: ['formData'],
  requestRecipeByID: ['textData'],
  receiveRecipeByID: ['recipeData']
});

export { Creators, Types };
