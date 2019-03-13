import types from './types';

const INITIAL_STATE = {
  recipeID: 0,
  recipeData: []
}
const homeReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case types.GET_RECIPE_ID: {
      const { recipeID } = action;
      return {
        ...state,
        recipeID: recipeID

      }
    }
    case types.REQUEST_RECIPE_ID: {
      const { recipeID } = action;
      return {
        ...state,
        recipeID,
        recipeData: []

      }
    }
    case types.RECEIVE_RECIPE_ID: {
      const { recipeData } = action;
      console.log(action)
      return {
        ...state,
        recipeID: recipeData.recipeID,
        recipeData

      }
    }

    default: return state;
  }
}

export default homeReducer;
