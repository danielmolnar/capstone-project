import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import React from 'react';

export default function Navigation() {
  return (
    <Nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/friends">Friends</NavLink>
      <NavLink to="/watchlist">Watchlist</NavLink>
      <NavLink to="/search">Search</NavLink>
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
