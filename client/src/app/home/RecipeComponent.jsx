import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components'
import placeholder from '../../../assets/placeholder.png';

const Recipe = styled.div
`
  height: 20%;
  width: 500px;
  background-color: #AABBCC;
  &:hover {
  filter: alpha(opacity=80);
  opacity: .8;
  }
  &:focus, &:active, &:hover {
    text-decoration: none;
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

function RecipeComponent({
  subredditData,
  showRedditSpinner,
  fetchSubredditJson
}) {
  if(showRedditSpinner) { return <p>Loading...</p> }

  return (
    <Recipe>
      <ThumbnailContainer>
        <Thumbnail src={placeholder}/>
      </ThumbnailContainer>
      <RecipeName> Recipe Name </RecipeName>
      <RecipeType> Recipe Type </RecipeType>
      <RecipeDescription>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </RecipeDescription>
    </Recipe>
  )
}

export default RecipeComponent;
