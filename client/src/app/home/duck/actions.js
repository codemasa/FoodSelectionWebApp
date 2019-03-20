import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  fetchRecipes: ['value'],
  requestRecipeID: ['recipe'],
  receiveRecipeID: ['recipeData'],
  successFetchRecipes: ['promise']
});

export { Creators, Types };
