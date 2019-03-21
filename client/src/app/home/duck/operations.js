import fetch from 'cross-fetch';
import {Creators} from './actions';

const requestRecipeIDAction = Creators.requestRecipeID;
const receiveRecipeIDAction = Creators.receiveRecipeID;


// 'fetchSubredditJson()' will fetch the JSON data from the subreddit,
// extract the required information and update the Redux store with it.
const fetchRecipes = () => {
  return dispatch => {

    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    dispatch(requestRecipeIDAction());
    // TODO access database here
    return fetch(`http://localhost:3000/chefstefandb`)
      .then(response => {
        return response.json();
      })
      .then(json => {
      const responseData = json;
      let data = [];
      responseData.map(child => {
        const childData = {
          recipeID: child.recipe_id,
          recipeName: child.recipe_name,
          recipeType: child.recipe_type,
          recipeDiet: child.recipe_diet,
          recipeDescription: child.recipe_description,
          recipeAllergens: child.recipe_allergens
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
      dispatch(receiveRecipeIDAction(data))

    });
  }
};


export default {
  fetchRecipes
}
