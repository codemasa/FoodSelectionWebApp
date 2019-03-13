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
  height: 20%;
  width: 500px;
  background-color: #AABBCC;
  &:hover {
  filter: alpha(opacity=80);
  opacity: .8;
  }
  font-family: "Arial";


`
const ThumbnailContainer = styled.div
`
  height: 100px;
  overflow: hidden;
`
const Thumbnail = styled.img
`

  width:500px;

`

const RecipeName = styled.h1
`
  margin: 0;
  margin-left 10px;



`
const RecipeType = styled.h2
`
  margin: 0;
  margin-left 10px;
  padding-top: .25em;

`
const RecipeDescription = styled.p
`
  margin: 0;
  margin-left 5px;
  padding: 1em;
`
const RecipeLink = styled(Link)
`
  color: #A3AB3B
  text-decoration: none;
  &:visited{
    color: #A3AB3B
  }
`

function RecipeComponent({
  recipeID,
  recipeName,
  recipeType,
  recipeDescription,
  fetchRecipeByID
}) {
  return (
    <Recipe>
      <RecipeLink to={'/recipe?id='+recipeID}>
      <ThumbnailContainer>
        <Thumbnail src={placeholder}/>
      </ThumbnailContainer>
      <RecipeName> {recipeName ? recipeName : "Recipe Name"} </RecipeName>
      <RecipeType> {recipeType ? recipeType : "Recipe Type"} </RecipeType>
      <RecipeDescription>  {recipeDescription ? recipeDescription : "Recipe Description"} </RecipeDescription>
      </RecipeLink>
    </Recipe>
  )
}

export default RecipeComponent;
