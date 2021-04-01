import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Star } from '@styled-icons/fa-regular/Star';
import { UserSettings } from '@styled-icons/remix-line/UserSettings';
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle';
import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill';
import { Profile } from '@styled-icons/icomoon/Profile';

export default function Menu({ open, setOpen, myProfile }) {
  return (
    <StyledMenu open={open}>
      <MenuWrapper>
        <BurgerLink to="/favorites">
          <CloseWrapper onClick={() => setOpen(!open)}>
            <Heart />
            <p>Favorites</p>
          </CloseWrapper>
        </BurgerLink>
        <BurgerLink to="/ratings">
          <CloseWrapper onClick={() => setOpen(!open)}>
            <StyledStar />
            <p>Ratings</p>
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
            <p>{myProfile.name ? 'Edit Profile ' : 'Create Profile'}</p>
          </CloseWrapper>
        </BurgerLink>
      </MenuWrapper>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

const Heart = styled(HeartCircle)`
  color: var(--secondary-100);
  height: 30px;
  margin-left: 20px;
  width: 30px;
`;

const StyledStar = styled(Star)`
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

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--secondary-100-opacity);
  box-shadow: ${({ open }) => (open ? 'var(--boxshadow)' : '')};
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  text-align: left;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  width: 30vh;
  z-index: 8;

  @media (max-width: 800px) {
    width: 25vh;
  }

  @media (max-width: 500px) {
    width: 25vh;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`;

const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  gap: 1rem;

  &:active,
  &:hover {
    background-color: var(--button-hover);
  }
`;

const BurgerLink = styled(NavLink)`
  text-decoration: none;
`;
