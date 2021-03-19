import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import React from 'react';

export default function Navigation() {
  const activeClassName = 'nav-item-active';

  const StyledLink = styled(NavLink).attrs({ activeClassName })`
    background-image: '../images/home.png';
    &.${activeClassName} {
      background-image: '../images/home.png';
    }
  `;

  return (
    <Nav>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      <StyledLink to="/friends">Friends</StyledLink>
      <StyledLink to="/watchlist">Watchlist</StyledLink>
      <StyledLink to="/search">Search</StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  width: 100%;
  bottom: 0;
  position: fixed;
  z-index: 10000;

  a {
    background-color: white;
    border: none;
    outline: none;
    border-radius: 3px;
    padding: 5px 10px;
    text-decoration: none;
    color: black;
  }
`;
