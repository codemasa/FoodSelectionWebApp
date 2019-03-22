import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink
} from 'react-router-dom';
import { Button } from 'styled-button-component';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from 'styled-dropdown-component';
import {Icon} from 'react-icons-kit';
import {search} from 'react-icons-kit/icomoon/search';
import {ic_shopping_basket} from 'react-icons-kit/md/ic_shopping_basket'
import styled from 'styled-components';

const Header = styled.header`
  z-index: 100;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  max-height: 10vh;
  margin: 0 auto;
  padding: 1em 0;
  margin-bottom: 1em;
  display: inline-flex;
  justify-content: flex-start;

  background-color: #807443;
`
const Brand = styled.h1`
  padding-left: 10vw;
  font-size: var(--step-up-1);
  padding-right: 2em;
`
const Menu = styled.ul`
  padding-right: 10vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50vw;
`
const MenuLink = styled.li`
  margin-left: 2em;
  text-decoration: none;
`
const Search = styled.span
`
  position: relative;
  justify-content: flex;

`
const SearchBar = styled.input
`
  font-size: 25px;
  width: 40em;
  padding: 1rem;
  padding-left: 4rem;
  float:left;
`
const SearchIcon = styled(Icon)
`
  position: fixed;
  padding-top: 1em;
  padding-left: 1em;
`
const Basket = styled.div
`
`
const BasketButton = styled(Button)
`
  margin-right: 10em;
  background-color: #807443;
  border: none;

`
const BasketIcon = styled(Icon)
`
`

const BasketCount = styled.p
`
  border-radius: 50%;
  width: 1em;
  height: 1em;
  padding: 4px;
  background: #D51D29;
  color: #FFFFFF;
  text-align: center;
  position: fixed;
  margin-left: 20px;
  font-size: 12px;
`

const BasketItem = styled(DropdownItem)
`
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
const ReviewButton = styled.button
`
  margin: 10px;
  padding: .5em;
`
const BasketDropdownMenu = styled(DropdownMenu)
`
  max-width: 25em;
`

function NavComponent({
  basket,
  basketOpen,
  openCloseBasket
}) {
  return (
    <Header>
      <Brand><NavLink exact to="/">Order Food</NavLink></Brand>
      <Search>
        <SearchIcon icon={search}/>
        <SearchBar placeholder="Search..." name="search"/>
      </Search>
      <Menu>
        <MenuLink>
          <Basket>
            {basket.length > 0 ? <BasketCount>{basket.length}</BasketCount> : null}
          <BasketButton pill onClick={openCloseBasket}><BasketIcon size="3em" icon={ic_shopping_basket}/></BasketButton>
          <Dropdown>
            <BasketDropdownMenu hidden={basketOpen}>
              {basket.map((recipe, key) => <BasketItem key={key}>

                                              <BasketItemName>{recipe.recipeName}</BasketItemName>
                                              <BasketItemInfo>Meal: {recipe.formData.meal} </BasketItemInfo>
                                              <BasketItemInfo>Qty: {recipe.formData.portions} </BasketItemInfo>
                                              <BasketItemInst>
                                                <BasketItemInfo> Instructions: {recipe.formData.instructions} </BasketItemInfo>

                                              </BasketItemInst>

                                            </BasketItem>)
              }
              {basket.length > 0 ? <NavLink to='/review'><ReviewButton> Review Order </ReviewButton></NavLink> : null}

            </BasketDropdownMenu>
          </Dropdown>
          </Basket>
        </MenuLink>
      </Menu>
    </Header>
  )
}

export default NavComponent;
