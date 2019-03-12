import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components'
import placeholder from '../../../assets/placeholder.png';

const Recipe = styled.div
`
  height: 20%;
  width: 500px;
  background-color: #AABBCC;
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
  margin-left 5px;

`
const RecipeType = styled.h2
`
  margin: 0;
  margin-left 5px;
  padding-top: .5em;
`
const RecipeDescription = styled.p
`
  margin: 0;
  margin-left 5px;
  padding-top: 1em;
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
      <RecipeDescription>  Description </RecipeDescription>
    </Recipe>
  )
}

export default RecipeComponent;
