import types from './types';

const INITIAL_STATE = {
  basket: [],
  basketOpen: true
}
const navReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {

    case types.OPEN_CLOSE_BASKET: {
      return{
        ...state,
        basketOpen: !state.basketOpen
      }
    }


    default: return state;
  }
}

export default navReducer;
