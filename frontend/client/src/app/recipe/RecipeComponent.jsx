import React from 'react';
import { Link }from 'react-router-dom';
import styled from 'styled-components';
import FormComponent from './FormComponent.jsx';
import placeholder from '../../../assets/placeholder.png';

const RecipeView = styled.div
`
  text-align: center;
  display: grid;
  justify-content: center;

`


function RecipeComponent({
  recipe,
  submit,
  addRecipeToBasket
}) {
  return (
    <RecipeView>
      <h1> {recipe ? recipe[0].recipeName : "??"} </h1>
      <h2> {recipe ? recipe[0].recipeType : "??"} </h2>
      <p> {recipe ? recipe[0].recipeDescription : "??"} </p>
      <img src={placeholder}/>
      <FormComponent onSubmit={addRecipeToBasket}/>
      <Link to='/' ><button> Back to Home</button></Link>
    </RecipeView>
  )
}

export default RecipeComponent;
