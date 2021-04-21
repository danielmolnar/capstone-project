import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Book } from '@styled-icons/fa-solid/Book';
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle';
import { UserSettings } from '@styled-icons/remix-line/UserSettings';
import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill';
import { Profile } from '@styled-icons/icomoon/Profile';

import { isMobile } from 'react-device-detect';

export default function Menu({ open, setOpen, styleguide, isLoggedIn }) {
  // const isMobile = false;
  !isMobile && setOpen(true);

  return (
    <StyledMenu open={open} styleguide={styleguide} isMobile={isMobile}>
      <MenuWrapper>
        <BurgerLink to="/favorites">
          <CloseWrapper onClick={() => setOpen(!open)}>
            <Heart />
            <p>Favorites</p>
          </CloseWrapper>
        </BurgerLink>
        <BurgerLink to="/friendsinfo">
          <CloseWrapper onClick={() => setOpen(!open)}>
            <Friends />
            <p>Friends</p>
          </CloseWrapper>
        </BurgerLink>
        <BurgerLink to="/profile">
          <CloseWrapper onClick={() => setOpen(!open)}>
            <MyProfile />
            <p>Profile</p>
          </CloseWrapper>
        </BurgerLink>
        <BurgerLink to="/createprofile">
          <CloseWrapper onClick={() => setOpen(!open)}>
            <ProfileSettings />
            <p>{isLoggedIn ? 'Edit Profile' : 'Create Profile'}</p>
          </CloseWrapper>
        </BurgerLink>
        <BurgerLink to="/about">
          <CloseWrapper onClick={() => setOpen(!open)}>
            <AboutIcon />
            <p>About</p>
          </CloseWrapper>
        </BurgerLink>
      </MenuWrapper>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  styleguide: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};

const Heart = styled(HeartCircle)`
  color: var(--secondary-100);
  height: 30px;
  margin: 0 20px;
  width: 30px;
`;

const Friends = styled(PeopleFill)`
  color: var(--secondary-100);
  height: 30px;
  margin: 0 20px;
  width: 30px;
`;

const MyProfile = styled(Profile)`
  color: var(--secondary-100);
  height: 30px;
  margin: 0 20px;
  width: 30px;
`;

const ProfileSettings = styled(UserSettings)`
  color: var(--secondary-100);
  height: 30px;
  margin: 0 20px;
  width: 30px;
`;

const AboutIcon = styled(Book)`
  color: var(--secondary-100);
  height: 30px;
  width: 30px;
  margin: 0 20px;
`;

const StyledMenu = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ styleguide }) =>
    styleguide ? 'var(--primary-100)' : 'var(--secondary-background)'};
  box-shadow: var(--boxshadow);
  height: 100vh;
  left: ${({ styleguide }) => (styleguide ? '' : '0')};
  top: ${({ styleguide }) => (styleguide ? '' : '0')};
  bottom: ${({ styleguide }) => (styleguide ? '' : '0')};
  position: ${({ styleguide }) => (styleguide ? '' : 'fixed')};
  text-align: left;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  width: 20vh;
  z-index: 8;
  width: ${({ isMobile }) => (isMobile ? '20vh' : '15rem')};
  /* width: 20vh; */

  @media (max-width: 800px) {
    width: ${({ isMobile }) => (isMobile ? '35vh' : '15rem')};
  }

  @media (max-width: 500px) {
    width: ${({ isMobile }) => (isMobile ? '30vh' : '15rem')};
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 2.75rem;
  height: 80%;
  width: 100%;
`;

const BurgerLink = styled(NavLink)`
  text-decoration: none;
`;

const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  &:active,
  &:hover {
    background-color: var(--button-hover);
  }
`;
