import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../services/device';

export default function Menu({ open, setOpen }) {
  return (
    <StyledMenu open={open}>
      <MenuWrapper>
        <BurgerLink to="/favorites">
          <CloseWrapper onClick={() => setOpen(!open)}>
            <h2>Favorites</h2>
          </CloseWrapper>
        </BurgerLink>

        <BurgerLink to="/favorites">
          <CloseWrapper onClick={() => setOpen(!open)}>
            <h2>Ratings</h2>
          </CloseWrapper>
        </BurgerLink>
        <BurgerLink to="/newwatchlist">
          <CloseWrapper onClick={() => setOpen(!open)}>
            <h2>Friends</h2>
          </CloseWrapper>
        </BurgerLink>
        <BurgerLink to="/favorites">
          <CloseWrapper onClick={() => setOpen(!open)}>
            <h2>Edit Profile</h2>
          </CloseWrapper>
        </BurgerLink>
      </MenuWrapper>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: PropTypes.bool,
};

const StyledMenu = styled.nav`
  background: hsla(360, 100%, 100%, 0);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  height: 100vh;
  left: 0;
  padding: 1rem;
  position: absolute;
  text-align: left;
  top: 3.5rem;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  width: 40vh;
  z-index: 1;

  @media (max-width: 800px) {
    width: 35vh;
  }

  @media (max-width: 500px) {
    width: 30vh;
  }

  @media (max-width: 320px) {
    width: 25vh;
  }
`;

const MenuWrapper = styled.div`
  height: 100%;
  margin-top: 3.3rem;
  position: fixed;

  h2 {
    color: white;

    @media (${device.mobileL}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const CloseWrapper = styled.div``;

const BurgerLink = styled(Link)`
  text-decoration: none;
`;
