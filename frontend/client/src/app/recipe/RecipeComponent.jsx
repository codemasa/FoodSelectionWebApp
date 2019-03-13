import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import placeholder from '../../../assets/placeholder.png';


function RecipeComponent({
  recipeID,
  imageURL,
  requestRecipe
}) {
  return (
    <div>
      <h1> RECIPE {recipeID} </h1>
      <h2> TYPE </h2>
      <p> DESCRIPTION </p>
      <img src={imageURL ? imageURL : placeholder}/>
      <br/>Meal:<br/>
      <select>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      <br/>
      Instructions (optional):<br/>
      <textarea rows={4} cols={50} placeholder="Special Instructions"/>
      <br/><br/>
      <button onClick={requestRecipe}>Send Text</button>


    </div>
  )
}

export default RecipeComponent;
