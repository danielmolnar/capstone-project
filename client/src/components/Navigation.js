import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt';
import { CameraMovie } from '@styled-icons/boxicons-regular/CameraMovie';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import { People } from '@styled-icons/octicons/People';

export default function Navigation() {
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
  color: var(--primary-100);

  &.${activeClassName} {
    border: var(--primary-100) 2px solid;
    padding: 3px;
    border-radius: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  bottom: 0;
  position: fixed;
  align-items: center;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 3rem;
`;

const NavWrapper = styled.div`
  position: fixed;
  z-index: 90000000000000;
  width: 100%;
  bottom: 0;
`;
