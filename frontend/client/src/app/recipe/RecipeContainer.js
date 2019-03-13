import { connect } from 'react-redux';
import RecipeComponent from './RecipeComponent.jsx';
import { recipeOperations } from './duck';

const mapStateToProps = state => {
  const { recipeID } = state.recipe;
  return { recipeID };
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const requestRecipe = (recipe) => {
    dispatch(recipeOperations.requestRecipe(recipe));
  }


  return {
    requestRecipe
  }
};



const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeComponent);

export default RecipeContainer;
