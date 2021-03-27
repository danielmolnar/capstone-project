import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt';
import { CameraMovie } from '@styled-icons/boxicons-regular/CameraMovie';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import { People } from '@styled-icons/octicons/People';

export default function Navigation({ open, setOpen }) {
  return (
    <>
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
    </>
  );
}

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  color: black;
  &.${activeClassName} {
    color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  border-top: white;
  align-items: center;
  position: relative;
  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  background: linear-gradient(to right, hsl(6, 66%, 35%), hsl(353, 85%, 53%));
  height: 3rem;
  border-top: white 2px solid;
`;
