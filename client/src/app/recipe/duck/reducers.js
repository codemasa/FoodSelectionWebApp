import types from './types';

const INITIAL_STATE = {
  recipeID: 0,
  recipe: null,
  formData: null,
  basket: [],
  imageURL: ''

}
const recipeReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case types.ADD_RECIPE_TO_BASKET: {
      const { formData } = action;
      const basketRecipe = {...state.recipe[0], formData}
      return {
        ...state,
        basket: [...state.basket, basketRecipe]

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
    case types.REQUEST_IMAGE_BY_ID: {
      return {
        ...state
      }
    }
    case types.RECEIVE_IMAGE_BY_ID: {
      const { imageData } = action;
      return {
        ...state,
        imageURL: imageData

      }
    }

    default: return state;
  }

}

export default recipeReducer;
