import fetch from 'cross-fetch';
import {Creators} from './actions';

const requestRecipeTextAction = Creators.requestRecipeText;
const receiveRecipeTextAction = Creators.receiveRecipeText;

// 'fetchSubredditJson()' will fetch the JSON data from the subreddit,
// extract the required information and update the Redux store with it.
const requestRecipe = (recipeID) => {
  return dispatch => {

    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    dispatch(requestRecipeTextAction(recipeID));
    return fetch(`https://www.reddit.com/r/all.json`)
      .then(response => response.json())
      .then(json => {
        const responseData = json;
        let data = [];

        responseData.data.children.map(child => {
          const childData = {
            title: child.data.title,
            url: child.data.permalink
          };

          data.push(childData);
          return null;
        });

      // Dispatching this action while passing the 'data' array
      // we created above will update the store with this data.
      // It is good practice to send only the required information
      // rather than trimming the data when and where it is used.
      // This is why we aren't sending the entire JSON response to
      // the Redux store.
      dispatch(receiveRecipeTextAction(recipeID))
      });
  }
};

export default {
  requestRecipe,

}
