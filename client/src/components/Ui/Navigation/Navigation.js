import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { NavLink, useLocation } from 'react-router-dom';
import { PeopleCommunity } from '@styled-icons/fluentui-system-filled/PeopleCommunity';
import { PeopleCommunity as PeopleOutline } from '@styled-icons/fluentui-system-regular/PeopleCommunity';
import { MoviesAndTv as MoviesOutline } from '@styled-icons/fluentui-system-regular/MoviesAndTv';
import { MoviesAndTv as Movies } from '@styled-icons/fluentui-system-filled/MoviesAndTv';
import { HomeFill } from '@styled-icons/octicons/HomeFill';
import { Search2 } from '@styled-icons/remix-fill/Search2';
import { Search } from '@styled-icons/octicons/Search';
import { Home } from '@styled-icons/octicons/Home';

export default function Navigation({ setOpen, styleguide }) {
  const location = useLocation();

  return (
    <NavWrapper styleguide={styleguide} isMobile={isMobile}>
      <Nav>
        <NavLink exact to="/" onClick={() => setOpen(false)}>
          {location.pathname === '/' ? <HomeFill /> : <Home />}
        </NavLink>
        <NavLink to="/friends" onClick={() => setOpen(false)}>
          {location.pathname === '/friends' ? (
            <PeopleCommunity />
          ) : (
            <PeopleOutline />
          )}
        </NavLink>
        <NavLink to="/watchlist" onClick={() => setOpen(false)}>
          {location.pathname === '/watchlist' ? <Movies /> : <MoviesOutline />}
        </NavLink>
        <NavLink to="/search" onClick={() => setOpen(false)}>
          {location.pathname === '/search' ? <Search2 /> : <Search />}
        </NavLink>
      </Nav>
    </NavWrapper>
  );
}

Navigation.propTypes = {
  setOpen: PropTypes.func,
  styleguide: PropTypes.bool,
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 800px;
  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-background);
  bottom: ${({ styleguide }) => (styleguide ? '' : '0')};
  box-shadow: var(--boxshadow);
  height: ${({ isMobile }) => (isMobile ? '3rem' : '5rem')};
  margin: 0 auto;
  position: ${({ styleguide }) => (styleguide ? 'static' : 'fixed')};
  width: 100%;
  z-index: 20;

  svg {
    fill: var(--secondary-100);
    height: ${({ isMobile }) => (isMobile ? '25px' : '35px')};
    width: ${({ isMobile }) => (isMobile ? '25px' : '35px')};
  }
`;
