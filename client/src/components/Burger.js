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
  position: absolute;
  top: 0.725rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 12;

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
      background: var(--primary-100);
    }

    :nth-child(2) {
      background: var(--primary-100);
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      background: var(--primary-100);
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
