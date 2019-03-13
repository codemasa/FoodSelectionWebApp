import { connect } from 'react-redux';
import NavComponent from './NavComponent.jsx';
import { navOperations } from './duck';

const mapStateToProps = state => {

  const { recipeID } = state.home;
  return { recipeID };
};




const NavContainer = connect(
  mapStateToProps
)(NavComponent);

export default NavContainer;
