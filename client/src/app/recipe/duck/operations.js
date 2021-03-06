import fetch from 'cross-fetch';
import {Creators} from './actions';

const addRecipeToBasket = Creators.addRecipeToBasket;
const requestRecipeByID = Creators.requestRecipeByID;
const receiveRecipeByID = Creators.receiveRecipeByID;
const requestImageByID = Creators.requestImageByID;
const receiveImageByID = Creators.receiveImageByID;

// 'fetchSubredditJson()' will fetch the JSON data from the subreddit,
// extract the required information and update the Redux store with it.
const fetchRecipeByID = () => {
  return dispatch => {
    const paramsString = window.location.search;
    const params = new URLSearchParams(paramsString);
    const id = params.get('id');
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    dispatch(requestRecipeByID(id));
    return fetch(`/api/recipes`)
      .then(response => response.json())
      .then(json => {
      const responseData = json;
      let data = [];
      responseData.map(child => {
        if(child.recipe_id == id){
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
        }
        return null;

      });

      // Dispatching this action while passing the 'data' array
      // we created above will update the store with this data.
      // It is good practice to send only the required information
      // rather than trimming the data when and where it is used.
      // This is why we aren't sending the entire JSON response to
      // the Redux store.
      dispatch(receiveRecipeByID(data))
      });
  }
};

const fetchImageByID = () => {
  return dispatch => {
    const paramsString = window.location.search;
    const params = new URLSearchParams(paramsString);
    const id = params.get('id');
    dispatch(requestImageByID(id))
    return fetch('/api/image', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({id: id})
      })
      .then(response => response.json())
      .then(json => dispatch(receiveImageByID(json[0].picture_url)));
    }
  }


export default {
  addRecipeToBasket,
  fetchRecipeByID,
  fetchImageByID

}
