import styled, { css } from 'styled-components';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from './Ui/Logo';

function Banner({ show, handleShow }) {
  useEffect(() => {
    const scrollDown = () =>
      window.scrollY > 120 ? handleShow(true) : handleShow(false);
    window.addEventListener('scroll', scrollDown, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollDown);
    };
  }, [handleShow]);

  return (
    <ImageWrapper show={show}>
      <Logo />
    </ImageWrapper>
  );
}

export default Banner;

Banner.propTypes = {
  show: PropTypes.bool,
  handleShow: PropTypes.func,
};

const ImageWrapper = styled.div(
  (props) => css`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: var(--boxshadow);
    transition-timing-function: ease-out;
    transition: all 0.5s;
    z-index: 9;
    background: var(--secondary-100);
    ${props.show &&
      css`
        opacity: 0;
      `}
  `
);
