import React from 'react';
import { Link } from 'react-router-dom';

import {reduxForm} from 'redux-form';
import styled from 'styled-components';

import placeholder from '../../../assets/placeholder.png';

const ReviewView = styled.div
`
  text-align: center;
  display: grid;
  justify-content: center;

`
const BasketItem = styled.div
`
  text-align: left;
  display: grid;
  justify-content: left;

`
const BasketItemName = styled.h2
`
`

const BasketItemInfo = styled.h3
`

  padding-left: .5em;
`
const BasketItemInst = styled.div
`
  overflow-wrap: break-word;
  white-space: normal;
`
const ConfirmButton = styled.button
`
`

function ReviewComponent({
  basket,
  submitOrder
}) {
  return (
    <ReviewView>
      {basket.map((recipe, key) =>  (<BasketItem key={key}>
                                      <BasketItemName>{recipe.recipeName}</BasketItemName>
                                      <BasketItemInfo>Meal: {recipe.formData.meal} </BasketItemInfo>
                                      <BasketItemInfo>Qty: {recipe.formData.portions} </BasketItemInfo>
                                      <BasketItemInst>
                                        <BasketItemInfo> Instructions: {recipe.formData.instructions} </BasketItemInfo>

                                      </BasketItemInst>
                                    </BasketItem>
                                    )
      )}
      {basket.length > 0 ? <ConfirmButton onClick={() => submitOrder(basket)}> Confirm and send email </ConfirmButton> : null}

    </ReviewView>
  )
}

export default ReviewComponent;
