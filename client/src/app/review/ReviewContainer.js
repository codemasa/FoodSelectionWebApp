import { connect } from 'react-redux';
import ReviewComponent from './ReviewComponent.jsx';
import { reviewOperations } from './duck';

const mapStateToProps = state => {
  const { basket } = state.recipe;
  return { basket };
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const retrieveBasket = (basket) => {
    dispatch(reviewOperations.retrieveBasket(basket));
  }
  const submitOrder = (order,email) => {
    dispatch(reviewOperations.submitOrder(order,email));
  }


  return {
    retrieveBasket,
    submitOrder
  }
};



const ReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewComponent);

export default ReviewContainer;
