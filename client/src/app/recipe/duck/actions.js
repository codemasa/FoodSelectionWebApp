import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  addRecipeToBasket: ['formData'],
  requestRecipeByID: ['textData'],
  receiveRecipeByID: ['recipeData'],
  requestImageByID: ['textData'],
  receiveImageByID: ['imageData']
});

export { Creators, Types };
