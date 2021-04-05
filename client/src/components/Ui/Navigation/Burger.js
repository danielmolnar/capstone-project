import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Burger({ open, setOpen, styleguide }) {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      styleguide={styleguide}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

Burger.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  styleguide: PropTypes.bool,
};

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ styleguide }) => (styleguide ? 'black' : 'transparent')};
  border: none;
  cursor: pointer;
  height: 2rem;
  left: ${({ styleguide }) => (styleguide ? '' : '1rem')};
  padding: 0;
  position: ${({ styleguide }) => (styleguide ? '' : 'fixed')};
  top: ${({ styleguide }) => (styleguide ? '' : '0.725rem')};
  width: 2rem;
  z-index: 21;

  @media (min-width: 1920px) {
    left: 5%;
  }

  &:focus {
    outline: none;
  }

  div {
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
    width: 2rem;
    transition: all 0.3s linear;
    height: 0.25rem;

    :first-child {
      background: ${({ open }) =>
        open || window.scrollY < 120 ? 'var(--primary-100)' : 'white'};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      background: ${({ open }) =>
        open || window.scrollY < 120 ? 'var(--primary-100)' : 'white'};
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      background: ${({ open }) =>
        open || window.scrollY < 120 ? 'var(--primary-100)' : 'white'};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
