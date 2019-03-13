import types from './types';

const INITIAL_STATE = {
  recipeID: 0,
  imageURL: null,
  text: ""

}
const recipeReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case types.REQUEST_RECIPE_TEXT: {
      const paramsString = window.location.search;
      const params = new URLSearchParams(paramsString);
      const id = params.get('id');
      const { recipeID } = action;
      return {
        ...state,
        recipeID: id

      }
    }
    case types.RECEIVE_RECIPE_TEXT: {
      const paramsString = window.location.search;
      const params = new URLSearchParams(paramsString);
      const id = params.get('id');
      const { recipeID } = action;
      return {
        ...state,
        recipeID: id

      }
    }

    default: return state;
  }
}

export default recipeReducer;
