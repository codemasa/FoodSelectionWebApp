import { connect } from 'react-redux';
import HomeComponent from './HomeComponent.jsx';
import { homeOperations } from './duck';

const mapStateToProps = state => {

  const { recipeData } = state.home;
  return {
    recipeData
  }
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const fetchRecipes = dispatch(homeOperations.fetchRecipes());

  return {
    fetchRecipes
  }
};



const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
