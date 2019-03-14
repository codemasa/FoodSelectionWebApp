import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  openCloseBasket: ['boolean']
});

export { Creators, Types };
