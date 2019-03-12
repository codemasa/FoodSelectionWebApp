import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import RecipeContainer from './RecipeContainer.js';

function HomeComponent({
  count,
  onIncrementClick,
  onDecrementClick
}) {
  return (
    <div>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
      <Link to={'/recipe?id='+count}><RecipeContainer/></Link>

    </div>
  )
}

export default HomeComponent;
