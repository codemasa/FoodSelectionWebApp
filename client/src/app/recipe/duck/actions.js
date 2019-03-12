import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  requestRecipe: ['subreddit'],
  receiveRecipe: ['subredditData']
});

export { Creators, Types };
