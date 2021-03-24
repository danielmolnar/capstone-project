import React, { useState, useEffect } from 'react';
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
    <ImageWrapper show={show} open={open}>
      <LogoStyler open={open} />
      <Sidebar open={open} setOpen={setOpen} />
    </ImageWrapper>
  );
}

export default Banner;

const ImageWrapper = styled.div(
  (props) => css`
    display: flex;
    justify-content: center;
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 1;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transition-timing-function: ease-out;
    transition: all 0.5s;

    ${props.show &&
      css`
        opacity: 0;
      `}
  `
);

const LogoStyler = styled(Logo)`
  object-fit: contain;
  transform: ${({ open }) => (open ? 'translateX(50vH)' : 'translateX(0)')};
  transition: transform 0.3s ease-in-out;
  max-width: 30%;
  padding: 10px;
`;
