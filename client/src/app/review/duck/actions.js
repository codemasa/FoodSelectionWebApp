import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  retrieveBasket: ['basketData'],
  requestSubmitOrder: ['orderData'],
  receiveSubmitOrder: ['confirmation']

});

export { Creators, Types };
