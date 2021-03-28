import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Star } from '@styled-icons/fa-regular/Star';
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle';
import { Settings } from '@styled-icons/fluentui-system-filled/Settings';
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
};

const Heart = styled(HeartCircle)`
  height: 30px;
  width: 30px;
  color: white;
  margin-left: 20px;
`;

const StyledStar = styled(Star)`
  height: 30px;
  width: 30px;
  color: white;
  margin-left: 20px;
`;

const Friends = styled(PeopleCommunity)`
  height: 30px;
  width: 30px;
  color: white;
  margin-left: 20px;
`;

const ProfileSettings = styled(Settings)`
  height: 30px;
  width: 30px;
  color: white;
  margin-left: 20px;
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: hsla(360, 100%, 100%, 0);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  position: absolute;
  text-align: left;
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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  gap: 1rem;

  &:active {
    background-color: hsla(360, 100%, 100%, 0.3);
  }
`;

const BurgerLink = styled(Link)`
  text-decoration: none;
`;
