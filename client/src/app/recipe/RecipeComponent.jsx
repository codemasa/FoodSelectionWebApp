import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';


function RecipeComponent({
  count,
  onIncrementClick,
  onDecrementClick
}) {
  return (
    <div>
      RECIPE {count}

    </div>
  )
}

export default RecipeComponent;
