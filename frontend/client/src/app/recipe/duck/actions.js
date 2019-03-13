import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  requestRecipeText: ['text'],
  receiveRecipeText: ['textData']
});

export { Creators, Types };
