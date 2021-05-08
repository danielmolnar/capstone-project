import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export default function Burger({ open, setOpen, styleguide }) {
  return (
    <StyledBurger
      open={open}
      isMobile={isMobile}
      styleguide={styleguide}
      onClick={() => setOpen(!open)}
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
  display: ${({ isMobile }) => (!isMobile ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-around;
  background: ${({ styleguide }) =>
    styleguide ? 'var(--tertiary-100)' : 'transparent'};
  border: none;
  cursor: pointer;
  height: 2rem;
  left: ${({ styleguide }) => (styleguide ? '' : '1rem')};
  padding: 0;
  position: ${({ styleguide }) => (styleguide ? '' : 'fixed')};
  top: ${({ styleguide }) => (styleguide ? '' : '0.725rem')};
  width: 2rem;
  z-index: 21;

  &:focus {
    outline: none;
  }

  div {
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;
    :first-child {
      background: ${({ open }) =>
        open || window.scrollY < 120
          ? 'var(--primary-100)'
          : 'var(--secondary-100)'};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      background: ${({ open }) =>
        open || window.scrollY < 120
          ? 'var(--primary-100)'
          : 'var(--secondary-100)'};
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      background: ${({ open }) =>
        open || window.scrollY < 120
          ? 'var(--primary-100)'
          : 'var(--secondary-100)'};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
