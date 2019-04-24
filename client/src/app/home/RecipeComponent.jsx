import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components'
import placeholder from '../../../assets/placeholder.png';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

const Recipe = styled.div
`
  height: 100%;
  max-width: 20%;
  min-width: 300px;

  background-color: #807443;
  &:hover {
  filter: alpha(opacity=80);
  opacity: .8;
  }
  font-family: "Arial";
  display: inline-grid;
  margin: 1em;


`
const ThumbnailContainer = styled.div
`
  height: 10vh;
  overflow: hidden;
`
const Thumbnail = styled.img
`
  width: 100%;
  height: 200%;

`

const RecipeName = styled.h1
`
  margin: 0;
  margin-left 10px;



`
const RecipeType = styled.h2
`
  margin: 0;
  margin-left: 10px;
  padding-top: .25em;
  float: left;

`
const RecipeDiet = styled.h2
`
  margin: 0;
  margin-right: 10px;
  padding-top: .25em;
  float: right;

`

const RecipeDescription = styled.p
`
  margin: 0;
  margin-left 5px;
  padding: 1em;
  clear: both;
`

const RecipeAllergens = styled.p
`
  margin: 0;
  margin-left 5px;
  padding: 1em;
`
const RecipeLink = styled(Link)
`
  color: #FFFFFF;
  text-decoration: none;
  &:visited{
    color: #FFFFFF;
  }
`

function RecipeComponent({
  recipe,
  key
}) {
  return (
    <Recipe key={key}>
      <RecipeLink to={'/recipe?id='+recipe.recipeID}>
        <ThumbnailContainer>
          <Thumbnail src={recipe.imageURL}/>
        </ThumbnailContainer>
        <RecipeName> {recipe ? recipe.recipeName : "Recipe Name"} </RecipeName>
        <RecipeType> {recipe.recipeType ? recipe.recipeType : "Recipe Type"} </RecipeType>
        <RecipeDiet> {recipe.recipeDiet ? recipe.recipeDiet : "Recipe Type"} </RecipeDiet>
        <RecipeDescription>  {recipe.recipeDescription ? recipe.recipeDescription : "Recipe Description"} </RecipeDescription>
        <RecipeAllergens>  {recipe.recipeAllergens ? "CONTAINS: " + recipe.recipeAllergens : "CONTAINS: none"} </RecipeAllergens>
      </RecipeLink>
    </Recipe>
  )
}

export default RecipeComponent;
