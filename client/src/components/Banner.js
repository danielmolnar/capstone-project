import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

function Banner({ show, handleShow, open, setOpen }) {
  useEffect(() => {
    const scrollDown = () =>
      window.scrollY > 120 ? handleShow(true) : handleShow(false);
    window.addEventListener('scroll', scrollDown, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollDown);
    };
  }, [handleShow]);

  return open ? (
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
