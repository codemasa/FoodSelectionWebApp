import { connect } from 'react-redux';
import RecipeComponent from './RecipeComponent.jsx';
import { recipeOperations } from './duck';

const mapStateToProps = state => {

  const { count } = state.home;
  return { count };
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const onIncrementClick = () => dispatch(recipeOperations.incrementCount(1));
  const onDecrementClick = () => dispatch(recipeOperations.decrementCount(1));

  return {
    onIncrementClick,
    onDecrementClick
  }
};



const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeComponent);

export default RecipeContainer;
