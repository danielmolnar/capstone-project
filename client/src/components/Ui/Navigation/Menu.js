import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { Book } from '@styled-icons/fa-solid/Book';
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle';
import { UserSettings } from '@styled-icons/remix-line/UserSettings';
import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill';
import { Profile } from '@styled-icons/icomoon/Profile';

export default function Menu({ open, setOpen, styleguide, isLoggedIn }) {
  let isOpen;
  if (isMobile) {
    isOpen = open;
  } else isOpen = true;

  return (
    <StyledMenu
      open={open}
      isOpen={isOpen}
      isMobile={isMobile}
      styleguide={styleguide}
    >
      <MenuWrapper>
        <BurgerLink to="/favorites" onClick={() => setOpen(!open)}>
          <Heart />
          <p>Favorites</p>
        </BurgerLink>
        <BurgerLink to="/friendsinfo" onClick={() => setOpen(!open)}>
          <Friends />
          <p>Friends</p>
        </BurgerLink>
        <BurgerLink to="/profile" onClick={() => setOpen(!open)}>
          <MyProfile />
          <p>Profile</p>
        </BurgerLink>
        <BurgerLink to="/createprofile" onClick={() => setOpen(!open)}>
          <ProfileSettings />
          <p>{isLoggedIn ? 'Edit Profile' : 'Create Profile'}</p>
        </BurgerLink>
        <BurgerLink to="/about" onClick={() => setOpen(!open)}>
          <AboutIcon />
          <p>About</p>
        </BurgerLink>
      </MenuWrapper>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  isMobile: PropTypes.bool,
  styleguide: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};

const Heart = styled(HeartCircle)`
  color: var(--secondary-100);
  height: ${({ isMobile }) => (isMobile ? '30px' : '35px')};
  margin: 15px 15px 15px 25px;
`;

const Friends = styled(PeopleFill)`
  color: var(--secondary-100);
  height: ${({ isMobile }) => (isMobile ? '30px' : '35px')};
  margin: 15px 15px 15px 25px;
`;

const MyProfile = styled(Profile)`
  color: var(--secondary-100);
  height: ${({ isMobile }) => (isMobile ? '30px' : '35px')};
  margin: 15px 15px 15px 25px;
`;

const ProfileSettings = styled(UserSettings)`
  color: var(--secondary-100);
  height: ${({ isMobile }) => (isMobile ? '30px' : '35px')};
  margin: 15px 15px 15px 25px;
`;

const AboutIcon = styled(Book)`
  color: var(--secondary-100);
  height: ${({ isMobile }) => (isMobile ? '30px' : '35px')};
  margin: 15px 15px 15px 25px;
`;

const StyledMenu = styled.nav`
  background: ${({ styleguide }) =>
    styleguide ? 'var(--primary-100)' : 'var(--secondary-background)'};
  bottom: ${({ styleguide }) => (styleguide ? '' : '0')};
  left: ${({ styleguide }) => (styleguide ? '' : '0')};
  position: ${({ styleguide }) => (styleguide ? '' : 'fixed')};
  top: ${({ styleguide }) => (styleguide ? '' : '0')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  width: ${({ isMobile }) => (isMobile ? '20vh' : '15rem')};
  box-shadow: var(--boxshadow);
  height: 100vh;
  text-align: left;
  transition: transform 0.3s ease-in-out;
  z-index: 8;

  @media (max-width: 800px) {
    width: ${({ isMobile }) => (isMobile ? '35vh' : '15rem')};
  }

  @media (max-width: 500px) {
    width: ${({ isMobile }) => (isMobile ? '30vh' : '15rem')};
  }

  svg {
    height: ${({ isMobile }) => (isMobile ? '30px' : '35px')};
  }

  p {
    font-size: ${({ isMobile }) => (isMobile ? '1rem' : '1.1rem')};
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 2.75rem;
  height: 80%;
  width: 100%;
`;

const BurgerLink = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 4rem;
  text-decoration: none;
  width: 100%;
  &:active,
  &:hover {
    background-color: var(--button-hover);
  }
`;
