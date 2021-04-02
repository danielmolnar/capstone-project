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

  return <Logo show={show} />;
}

export default Banner;

Banner.propTypes = {
  show: PropTypes.bool,
  handleShow: PropTypes.func,
};
