import types from './types';

const INITIAL_STATE = {
  basketData: null
}
const reviewReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {

    case types.RETRIEVE_BASKET: {
      const { basketData } = action;
      return {
        ...state,
        basketData: basketData

      }
    }
    case types.REQUEST_SUBMIT_ORDER: {
      const { basketData } = action;
      return {
        ...state,

      }
    }
    case types.RECIEVE_SUBMIT_ORDER: {
      const { basketData } = action;
      return {
        ...state,

      }
    }
    default: return state;
  }
}

export default reviewReducer;
