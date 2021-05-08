import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import Logo from './Logo';

function Banner({ show, open, setOpen, handleShow }) {
  let isOpen;
  if (isMobile) {
    isOpen = open;
  } else isOpen = true;

  useEffect(() => {
    const scrollDown = () =>
      window.scrollY > 120 ? handleShow(true) : handleShow(false);
    window.addEventListener('scroll', scrollDown, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollDown);
    };
  }, [handleShow]);

  return isOpen ? (
    <Logo setOpen={setOpen} />
  ) : (
    <Logo show={show} setOpen={setOpen} />
  );
}

export default Banner;

Banner.propTypes = {
  show: PropTypes.bool,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  handleShow: PropTypes.func,
};
