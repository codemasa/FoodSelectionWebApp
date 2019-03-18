import { connect } from 'react-redux';
import NavComponent from './NavComponent.jsx';
import { navOperations } from './duck';

const mapStateToProps = state => {

  const { basket, formData } = state.recipe;
  const { basketOpen } = state.nav;
  return { basket, formData, basketOpen };
};


const mapDispatchToProps = dispatch => {

  const openCloseBasket = () => {
    dispatch(navOperations.openCloseBasket());
  }


  return {
    openCloseBasket
  }
};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavComponent);

export default NavContainer;
