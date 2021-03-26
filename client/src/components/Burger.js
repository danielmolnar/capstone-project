import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Burger({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

Burger.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export const StyledBurger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  left: 2rem;
  padding: 0;
  position: absolute;
  top: 5%;
  width: 2rem;
  z-index: 2;

  &:focus {
    outline: none;
  }

  div {
    background: ${({ theme }) => theme.primaryLight};
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      background: ${({ open }) =>
        open ? 'hsl(353, 85%, 53%)' : 'hsl(353, 85%, 53%)'};
    }

    :nth-child(2) {
      background: ${({ open }) =>
        open ? 'hsl(353, 85%, 53%)' : 'hsl(353, 85%, 53%)'};
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      background: ${({ open }) =>
        open ? 'hsl(353, 85%, 53%)' : 'hsl(353, 85%, 53%)'};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
