import { connect } from 'react-redux';
import HomeComponent from './HomeComponent.jsx';
import { homeOperations } from './duck';

const mapStateToProps = state => {

  const { count } = state.home;
  return { count };
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const onIncrementClick = () => dispatch(homeOperations.incrementCount(1));
  const onDecrementClick = () => dispatch(homeOperations.decrementCount(1));

  return {
    onIncrementClick,
    onDecrementClick
  }
};



const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
