import types from './types';

const INITIAL_STATE = {
  recipeData: []
}
const homeReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case types.REQUEST_RECIPE_ID: {
      return {
        ...state,
        recipeData: []

      }
    }
    case types.RECEIVE_RECIPE_ID: {
      const { recipeData } = action;
      return {
        ...state,
        recipeData

      }
    }
    case types.REQUEST_IMAGE_ID: {
      return {
        ...state
      }
    }
    case types.RECEIVE_IMAGE_ID: {
      const { recipeData } = action;
      return {
        ...state,
        recipeData

      }
    }

    default: return state;
  }
}

export default homeReducer;
