import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  fetchRecipes: ['value'],
  requestRecipeID: ['recipe'],
  receiveRecipeID: ['recipeData'],
  requestImageByID: ['recipe'],
  receiveImageByID: ['imageURL'],
  successFetchRecipes: ['promise']
});

export { Creators, Types };
