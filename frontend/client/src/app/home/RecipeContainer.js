import { connect } from 'react-redux';
import RecipeComponent from './RecipeComponent.jsx';

// This will make sense to you once we discuss the Redux code,
// but for now, just know that 'homeOperations' will let you trigger
// Redux actions.
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
  const { recipeData } = state.home;
  return {
    recipeData
  }
};


const RecipeContainer = connect(
  mapStateToProps
)(RecipeComponent);

export default RecipeContainer;
