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
    case types.RECEIVE_SUBMIT_ORDER: {
      const { confirmation } = action;
      if(confirmation == true){
        alert("Email Sent");
      }
      else(alert("error sending"));
    }
    default: return state;
  }
}

export default reviewReducer;
