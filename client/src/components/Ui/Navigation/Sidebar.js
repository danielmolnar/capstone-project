import PropTypes from 'prop-types';
import Burger from './Burger';
import Menu from './Menu';

export default function Sidebar({ open, setOpen, styleguide, isLoggedIn }) {
  return (
    <>
      <Burger open={open} setOpen={setOpen} styleguide={styleguide} />
      <Menu
        open={open}
        setOpen={setOpen}
        styleguide={styleguide}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  styleguide: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};
