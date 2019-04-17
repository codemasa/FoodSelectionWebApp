import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import RecipeContainer from './RecipeContainer.js';


function HomeComponent({
  recipeData
}) {
  return (
    <div>
      {recipeData ? recipeData.map((recipe) =>
        {
          return <RecipeContainer recipe={recipe} key={recipe.recipeID}/>
        }
      ):null}

    </div>
  )
}

export default HomeComponent;
