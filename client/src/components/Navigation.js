import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt';
import { UserFriends } from '@styled-icons/fa-solid/UserFriends';
import { CameraMovie } from '@styled-icons/boxicons-regular/CameraMovie';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import { People } from '@styled-icons/octicons/People';
import React from 'react';

export default function Navigation() {
  const activeClassName = 'nav-item-active';

  const StyledLink = styled(NavLink).attrs({ activeClassName })`
    color: black;

    svg {
      max-height: 24px;
      max-width: 24px;
    }

    &.${activeClassName} {
      color: var(--primary-100);
    }
  `;

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

const Nav = styled.nav`
  display: flex;
  border-top: white;
  align-items: center;
  background-color: white;
  padding: 5px;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 10000;
  width: 100%;
  height: 40px;
`;

// const NavWrapper = styled.div`
//   border-top: white 1px solid;
//   display: flex;
//   justify-content: center;
//   background: none;
//   position: fixed;
//   z-index: 10000;
//   bottom: 0;
//   width: 100%;
// `;

// const RedHome = styled(HomeAlt)`
//   color: white;

//   &:active {
//     fill: white;
//   }
// `;
// const StyledLink = styled(NavLink).attrs({ activeClassName })`
//   svg {
//     color: var(--primary-100);
//   }

//   &.${activeClassName} {
//     svg {
//       path {
//         fill: var(--primary-100);
//       }
//     }
//   }
// `;

// const StyledLink = styled(NavLink).attrs({ activeClassName })`
//   ${HomeAlt} {
//     color: blue;
//     fill-opacity: 0.3;
//   }

//   &.${activeClassName} {
//     ${People} {
//       color: white;
//     }
//   }
// `;
