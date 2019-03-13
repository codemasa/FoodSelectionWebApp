import { connect } from 'react-redux';
import HomeComponent from './HomeComponent.jsx';
import { homeOperations } from './duck';

const mapStateToProps = state => {

  const { recipeID } = state.home;
  return { recipeID };
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const getRecipeID = dispatch(homeOperations.getRecipeID());

  return {
    getRecipeID
  }
};



const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
