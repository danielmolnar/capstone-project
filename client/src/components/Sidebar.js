import PropTypes from 'prop-types';
import Burger from './Burger';
import Menu from './Menu';

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
