import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import styled from 'styled-components';

import placeholder from '../../../assets/placeholder.png';

const RecipeView = styled.div
`
  text-align: center;
  display: grid;
  justify-content: center;

`


function RecipeComponent({
  recipe,
  addRecipeToBasket
}) {
  return (
    <RecipeView>
      <h1> {recipe ? recipe[0].recipeName : "??"} </h1>
      <h2> {recipe ? recipe[0].recipeType : "??"} </h2>
      <p> {recipe ? recipe[0].recipeDescription : "??"} </p>
      <img src={placeholder}/>
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
      <Link to='/' ><button onClick={addRecipeToBasket}>Add to basket</button></Link>


    </RecipeView>
  )
}

export default RecipeComponent;
