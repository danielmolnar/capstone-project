import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Menu({ open, setOpen }) {
  return (
    <StyledMenu open={open}>
      <StyledText>
        <Link to="/favorites">
          <CloseContainer onClick={() => setOpen(!open)}>
            <h2>Favorites</h2>
          </CloseContainer>
        </Link>

        <Link to="/favorites">
          <CloseContainer onClick={() => setOpen(!open)}>
            <h2>Ratings</h2>
          </CloseContainer>
        </Link>
        <Link to="/newwatchlist">
          <CloseContainer onClick={() => setOpen(!open)}>
            <h2>Friends</h2>
          </CloseContainer>
        </Link>
        <Link to="/favorites">
          <CloseContainer onClick={() => setOpen(!open)}>
            <h2>Edit Profile</h2>
          </CloseContainer>
        </Link>
      </StyledText>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: PropTypes.bool,
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: white;
  height: 100vh;
  border: solid white 1px;
  left: 0;
  padding: 1rem;
  position: absolute;
  text-align: left;
  bottom: 3rem;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  width: 35vh;

  @media (max-width: 800px) {
    width: 30vh;
  }

  @media (max-width: 500px) {
    width: 20vh;
  }

  @media (max-width: 320px) {
    width: 15vh;
  }
`;

const CloseContainer = styled.div``;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 80vh;

  h2 {
    font-family: 'Bebas Neue', cursive;
    color: hsl(353, 85%, 53%);
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;
  }
`;
