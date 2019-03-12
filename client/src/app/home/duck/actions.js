import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  incrementCount: ['value'],
  decrementCount: ['value'],
  requestSubredditJson: ['subreddit'],
  receiveSubredditJson: ['subredditData']
});

export { Creators, Types };
