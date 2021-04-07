import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle';
import { UserSettings } from '@styled-icons/remix-line/UserSettings';
import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill';
import { Profile } from '@styled-icons/icomoon/Profile';

import { PermDeviceInformation } from '@styled-icons/material/PermDeviceInformation';

export default function Menu({ open, setOpen, styleguide, isLoggedIn }) {
  return (
    <StyledMenu open={open} styleguide={styleguide}>
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
  myProfile: PropTypes.object,
  styleguide: PropTypes.bool,
};

const Heart = styled(HeartCircle)`
  color: var(--secondary-100);
  height: 30px;
  margin-left: 20px;
  width: 30px;
`;

const Friends = styled(PeopleFill)`
  color: var(--secondary-100);
  height: 30px;
  margin-left: 20px;
  width: 30px;
`;

const MyProfile = styled(Profile)`
  color: var(--secondary-100);
  height: 30px;
  margin-left: 22.5px;
  width: 30px;
`;

const ProfileSettings = styled(UserSettings)`
  color: var(--secondary-100);
  height: 30px;
  margin-left: 22.5px;
  width: 30px;
`;

const AboutIcon = styled(PermDeviceInformation)`
  color: var(--secondary-100);
  height: 30px;
  margin-left: 20px;
  width: 30px;
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  width: 40vh;
  z-index: 8;

  @media (max-width: 800px) {
    width: 35vh;
  }

  @media (max-width: 500px) {
    width: 30vh;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`;

const BurgerLink = styled(NavLink)`
  text-decoration: none;
`;

const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 3rem;
  &:active,
  &:hover {
    background-color: var(--button-hover);
  }
`;
