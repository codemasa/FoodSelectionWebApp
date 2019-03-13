import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink
} from 'react-router-dom';
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

  background-color: #EEAAAA;
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
const BasketIcon = styled(Icon)
`
  padding-bottom: .5;
  padding-top: 1em;
  padding-right: .5em;
  width: 2em;
`
const ArrowDown = styled.i
`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  text-decoration: none;

`
function NavComponent({

}) {
  return (
    <Header>
      <Brand>Chef Stefan</Brand>
      <Search>
        <SearchIcon icon={search}/>
        <SearchBar placeholder="Search..." name="search"/>
      </Search>
      <Menu>
        <MenuLink>
          <Basket>
            <BasketIcon size="2em" icon={ic_shopping_basket}/>
            <ArrowDown/>
          </Basket>
        </MenuLink>
      </Menu>
    </Header>
  )
}

export default NavComponent;
