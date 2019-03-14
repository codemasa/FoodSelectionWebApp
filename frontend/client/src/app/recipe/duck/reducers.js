import types from './types';

const INITIAL_STATE = {
  recipeID: 0,
  imageURL: null,
  recipe: null,
  basket: []

}
const recipeReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case types.ADD_RECIPE_TO_BASKET: {
      const { recipe } = action;
      return {
        ...state,
        basket: [...state.basket, state.recipe[0]]

      }
    }
    case types.REQUEST_RECIPE_BY_ID: {
      const paramsString = window.location.search;
      const params = new URLSearchParams(paramsString);
      const id = params.get('id');
      const { recipeID } = action;
      return {
        ...state,
        recipeID: id

      }
    }
    case types.RECEIVE_RECIPE_BY_ID: {
      const { recipeData } = action;
      return {
        ...state,
        recipe: recipeData

      }
    }

    default: return state;
  }
}

export default recipeReducer;
