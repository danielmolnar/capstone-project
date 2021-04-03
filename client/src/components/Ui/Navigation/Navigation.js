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
    <>
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
    </>
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
  background: var(--primary-background);
  border-top: white 1px solid;
  bottom: 0;
  box-shadow: var(--boxshadow);
  height: 3rem;
  position: ${({ styleguide }) => (styleguide ? '' : 'fixed')};
  right: 0;
  width: 100%;
  z-index: 20;
`;
