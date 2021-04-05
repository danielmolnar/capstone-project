import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from './Ui/Logo';

function Banner({ show, handleShow, open }) {
  useEffect(() => {
    const scrollDown = () =>
      window.scrollY > 120 ? handleShow(true) : handleShow(false);
    window.addEventListener('scroll', scrollDown, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollDown);
    };
  }, [handleShow]);

  return open ? <Logo /> : <Logo show={show} />;
}

export default Banner;

Banner.propTypes = {
  show: PropTypes.bool,
  open: PropTypes.bool,
  handleShow: PropTypes.func,
};
