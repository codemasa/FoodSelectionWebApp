import { connect } from 'react-redux';
import RecipeComponent from './RecipeComponent.jsx';

// This will make sense to you once we discuss the Redux code,
// but for now, just know that 'homeOperations' will let you trigger
// Redux actions.
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
  const { recipeID, recipeName, recipeType, recipeDescription } = state.home;
  return {
    recipeID,
    recipeName,
    recipeType,
    recipeDescription
  }
};

const mapDispatchToProps = (dispatch) => {
  const paramsString = window.location.search;
  const params = new URLSearchParams(paramsString);
  const recipeID = params.get('id');
  const fetchRecipeByID = () => {
    dispatch(homeOperations.fetchRecipeByID());
  }



  return { fetchRecipeByID };
};

const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeComponent);

export default RecipeContainer;
