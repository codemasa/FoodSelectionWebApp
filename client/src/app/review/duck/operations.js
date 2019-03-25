import fetch from 'cross-fetch';
import {Creators} from './actions';

const retrieveBasket = Creators.retrieveBasket;
const requestSubmitOrder = Creators.requestSubmitOrder;
const receiveSubmitOrder = Creators.receiveSubmitOrder;

const submitOrder = (order,email) => {
  return dispatch => {
    dispatch(requestSubmitOrder(order,email));
    fetch('/order', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({order: JSON.stringify(order), email: email})
  }).then((response) => dispatch(receiveSubmitOrder(response.ok)))
    .catch((error)=>console.log(error))
  }

};

export default {
  retrieveBasket,
  submitOrder
}
