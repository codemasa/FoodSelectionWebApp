import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import RecipeContainer from './RecipeContainer.js';

function HomeComponent({

}) {
  return (
    <div>
      <RecipeContainer/>

    </div>
  )
}

export default HomeComponent;
