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
  left: 1rem;
  padding: 0;
  position: absolute;
  bottom: 0.5rem;
  width: 2rem;
  z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999;
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
      background: ${({ open }) => (open ? 'white' : 'white')};
    }
    :nth-child(2) {
      background: ${({ open }) => (open ? 'white' : 'white')};
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      background: ${({ open }) => (open ? 'white' : 'white')};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
