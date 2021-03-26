import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <Link to="/favorites">
        <span role="img" aria-label="Favorites"></span>
        Favorites
      </Link>
      <Link to="/favorites">
        <span role="img" aria-label="Ratings"></span>
        Ratings
      </Link>
      <Link to="/newwatchlist">
        <span role="img" aria-label="Friends"></span>
        Friends
      </Link>
      <Link to="/favorites">
        <span role="img" aria-label="Edit Profile"></span>
        Edit Profile
      </Link>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: PropTypes.bool,
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background: white;
  height: 100vh;
  left: 0;
  padding: 1rem;
  position: absolute;
  text-align: left;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  width: 20vh;
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 35%;
  }

  a {
    font-family: 'Bebas Neue', cursive;
    color: hsl(353, 85%, 53%);
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;
    /* font-weight: bold; */
    /* letter-spacing: 0.5rem; */
    /* margin-bottom: 5rem; */
    /* padding: 2rem 0; */
    /* text-transform: uppercase; */

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
