import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt';
import { CameraMovie } from '@styled-icons/boxicons-regular/CameraMovie';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import { People } from '@styled-icons/octicons/People';
import React from 'react';

export default function Navigation() {
  return (
    <NavWrapper>
      <Nav>
        <StyledLink exact to="/">
          <HomeAlt size="24" />
        </StyledLink>
        <StyledLink to="/friends">
          <People size="24" />
        </StyledLink>
        <StyledLink to="/watchlist">
          <CameraMovie size="24" />
        </StyledLink>
        <StyledLink to="/search">
          <SearchAlt size="24" />
        </StyledLink>
      </Nav>
    </NavWrapper>
  );
}

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  color: white;

  &.${activeClassName} {
    border: white 2px solid;
    padding: 3px;
    border-radius: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  border-top: white;
  align-items: center;
  background: linear-gradient(to right, hsl(6, 66%, 35%), hsl(353, 85%, 53%));
  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 10000;
  width: 100%;
  height: 50px;
  border-top: white 2px solid;
`;
