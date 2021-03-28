import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt';
import { CameraMovie } from '@styled-icons/boxicons-regular/CameraMovie';
import { CameraMovie as CameraMovieFilled } from '@styled-icons/boxicons-solid/CameraMovie';
import { Search } from '@styled-icons/octicons/Search';
import { Search2 } from '@styled-icons/remix-fill/Search2';
import { People } from '@styled-icons/octicons/People';
import Cinema from '../images/Cinema';
import CinemaFilled from '../images/CinemaFilled';

import { AiFillHome } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';

export default function Navigation() {
  const location = useLocation();

  return (
    <>
      <NavWrapper>
        <Nav>
          <StyledLink exact to="/">
            {location.pathname === '/' ? <AiFillHome /> : <AiOutlineHome />}
          </StyledLink>
          <StyledLink to="/friends">
            {location.pathname === '/friends' ? (
              <CinemaFriendsFilled />
            ) : (
              <CinemaFriends />
            )}
          </StyledLink>
          <StyledLink to="/watchlist">
            {location.pathname === '/watchlist' ? (
              <CameraMovieFilled />
            ) : (
              <CameraMovie />
            )}
          </StyledLink>
          <StyledLink to="/search">
            {location.pathname === '/search' ? <Search2 /> : <Search />}
          </StyledLink>
        </Nav>
      </NavWrapper>
    </>
  );
}

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  color: white;
  svg {
    width: 25px;
    height: 25px;
  }

  &.${activeClassName} {
  }
`;

const CinemaFriends = styled(Cinema)`
  width: 25px;
  height: 25px;
  fill: white;
`;

const CinemaFriendsFilled = styled(CinemaFilled)`
  width: 22.5px;
  height: 22.5px;
  fill: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  bottom: 0;
  align-items: center;
  border-radius: 5px;
  height: 3rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 800px;
`;

const NavWrapper = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  background: var(--primary-background);
  display: flex;
  justify-content: center;
  z-index: 90000000000000;
  width: 100%;
  bottom: 0;
`;
