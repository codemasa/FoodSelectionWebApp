import React from 'react';
import RecipeContainer from './RecipeContainer.js';

function HomeComponent({
  count,
  onIncrementClick,
  onDecrementClick
}) {
  return (
    <div>
      <p>current count: {count ? count : 0}</p>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
      <RecipeContainer/>
    </div>
  )
}

export default HomeComponent;
