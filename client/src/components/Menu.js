import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Star } from '@styled-icons/fa-regular/Star';
import { UserSettings } from '@styled-icons/remix-line/UserSettings';
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle';
import { PeopleCommunity } from '@styled-icons/fluentui-system-filled/PeopleCommunity';

export default function Menu({ open, setOpen }) {
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
            <ProfileSettings />
            <p>Profile</p>
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

const Friends = styled(PeopleCommunity)`
  color: var(--secondary-100);
  height: 30px;
  margin-left: 20px;
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
  bottom: 0;
  box-shadow: ${({ open }) => (open ? 'var(--boxshadow)' : '')};
  height: 100vh;
  left: 0;
  overflow-x: hidden;
  position: fixed;
  text-align: left;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  width: 30vh;
  z-index: 1;

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

const BurgerLink = styled(Link)`
  text-decoration: none;
`;
