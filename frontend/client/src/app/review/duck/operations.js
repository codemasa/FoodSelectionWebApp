import fetch from 'cross-fetch';
import {Creators} from './actions';

const retrieveBasket = Creators.retrieveBasket;
const requestSubmitOrder = Creators.requestSubmitOrder;
const receiveSubmitOrder = Creators.receiveSubmitOrder;

const submitOrder = (order) => {
  return dispatch => {
    dispatch(requestSubmitOrder(order));

    return fetch('http://localhost:3002/order', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order)
    })
    .then(function(response) {
      console.log(response);
      return response.json();
    })


    dispatch(receiveSubmitOrder(true))
  }
};

export default {
  retrieveBasket,
  submitOrder
}
