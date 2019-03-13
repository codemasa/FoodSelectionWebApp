import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  getRecipeID: ['value'],
  requestRecipeID: ['recipe'],
  receiveRecipeID: ['recipeData']
});

export { Creators, Types };
