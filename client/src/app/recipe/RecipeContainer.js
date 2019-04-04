import { connect } from 'react-redux';
import RecipeComponent from './RecipeComponent.jsx';
import { recipeOperations } from './duck';

const mapStateToProps = state => {
  const { recipeID, recipe } = state.recipe;
  return { recipeID, recipe };
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const addRecipeToBasket = (recipe) => {
    dispatch(recipeOperations.addRecipeToBasket(recipe));
  }
  const fetchRecipeByID = dispatch(recipeOperations.fetchRecipeByID());
  const fetchImageByID = dispatch(recipeOperations.fetchImageByID());

  return {
    fetchRecipeByID,
    addRecipeToBasket
  }
};



const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeComponent);

export default RecipeContainer;
