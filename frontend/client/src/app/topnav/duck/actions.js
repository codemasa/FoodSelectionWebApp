import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  requestRecipeID: ['recipe'],
  receiveRecipeID: ['recipeData']
});

export { Creators, Types };
