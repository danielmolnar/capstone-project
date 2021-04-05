import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { CameraMovie as CameraMovieFilled } from '@styled-icons/boxicons-solid/CameraMovie';
import { CameraMovie } from '@styled-icons/boxicons-regular/CameraMovie';
import { Search2 } from '@styled-icons/remix-fill/Search2';
import CinemaFilled from '../../../images/CinemaFilled';
import { Search } from '@styled-icons/octicons/Search';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import Cinema from '../../../images/Cinema';

export default function Navigation({ setOpen, styleguide }) {
  const location = useLocation();

  return (
    <NavWrapper>
      <Nav styleguide={styleguide}>
        <StyledLink exact to="/" onClick={() => setOpen(false)}>
          {location.pathname === '/' ? <AiFillHome /> : <AiOutlineHome />}
        </StyledLink>
        <StyledLink to="/friends" onClick={() => setOpen(false)}>
          {location.pathname === '/friends' ? <CinemaFilled /> : <Cinema />}
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
  );
}

Navigation.propTypes = {
  setOpen: PropTypes.func,
  styleguide: PropTypes.bool,
};

const StyledLink = styled(NavLink)`
  svg {
    width: 25px;
    height: 25px;
    fill: var(--secondary-100);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background: var(--primary-background);
  box-shadow: var(--boxshadow);
  height: 3rem;
  width: 100%;
  z-index: 20;
  position: fixed;
  bottom: 0;
  position: ${({ styleguide }) => (styleguide ? '' : 'fixed')};
`;
