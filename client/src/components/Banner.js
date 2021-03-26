import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Logo from '../images/Logo.js';
import Sidebar from '../components/Sidebar';

function Banner({ open, setOpen }) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const scrollDown = () =>
      window.scrollY > 120 ? handleShow(true) : handleShow(false);

    window.addEventListener('scroll', scrollDown, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollDown);
    };
  }, []);

  return (
    <>
      <SidebarWrapper>
        <Sidebar open={open} setOpen={setOpen} />
      </SidebarWrapper>
      <ImageWrapper show={show} open={open}>
        <LogoStyler open={open} />
      </ImageWrapper>
    </>
  );
}

export default Banner;

Banner.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

const SidebarWrapper = styled.div`
  top: 0;
  position: relative;
`;

const ImageWrapper = styled.div(
  (props) => css`
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    transition: all 0.5s;
    transition-timing-function: ease-out;
    width: 100%;
    z-index: 1;

    ${props.show &&
      css`
        opacity: 0;
      `}
  `
);

const LogoStyler = styled(Logo)`
  max-width: 30%;
  padding: 10px;
  transform: ${({ open }) => (open ? 'translateX(50vH)' : 'translateX(0)')};
  transition: transform 0.3s ease-in-out;
  object-fit: contain;
`;
