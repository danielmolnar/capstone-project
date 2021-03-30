import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Cinema from '../images/Cinema';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import CinemaFilled from '../images/CinemaFilled';
import { Search } from '@styled-icons/octicons/Search';
import { Search2 } from '@styled-icons/remix-fill/Search2';
import { CameraMovie } from '@styled-icons/boxicons-regular/CameraMovie';
import { CameraMovie as CameraMovieFilled } from '@styled-icons/boxicons-solid/CameraMovie';

export default function Navigation({ setOpen }) {
  const location = useLocation();

  return (
    <>
      <NavWrapper>
        <Nav>
          <StyledLink exact to="/" onClick={() => setOpen(false)}>
            {location.pathname === '/' ? <AiFillHome /> : <AiOutlineHome />}
          </StyledLink>
          <StyledLink to="/friends" onClick={() => setOpen(false)}>
            {location.pathname === '/friends' ? (
              <CinemaFriendsFilled />
            ) : (
              <CinemaFriends />
            )}
          </StyledLink>
          <StyledLink to="/watchlist" onClick={() => setOpen(false)}>
            {location.pathname === '/watchlist' ? (
              <CameraMovieFilled />
            ) : (
              <CameraMovie />
            )}
          </StyledLink>
          <StyledLink to="/search" onClick={() => setOpen(false)}>
            {location.pathname === '/search' ? <Search2 /> : <Search />}
          </StyledLink>
        </Nav>
      </NavWrapper>
    </>
  );
}

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  color: var(--secondary-100);
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
  fill: var(--secondary-100);
`;

const CinemaFriendsFilled = styled(CinemaFilled)`
  width: 22.5px;
  height: 22.5px;
  fill: var(--secondary-100);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  height: 3rem;
  max-width: 1080px;
  padding: 1.5rem;
  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-background);
  bottom: 0;
  box-shadow: var(--boxshadow);
  position: fixed;
  width: 100%;
  z-index: 5;
`;
