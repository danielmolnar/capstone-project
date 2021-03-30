import PropTypes from 'prop-types';
import Burger from './Burger';
import Menu from './Menu';

export default function Sidebar({ open, setOpen, show, handleShow }) {
  return (
    <>
      <Burger
        open={open}
        setOpen={setOpen}
        show={show}
        handleShow={handleShow}
      />
      <Menu open={open} setOpen={setOpen} />
    </>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  show: PropTypes.bool,
  handleShow: PropTypes.func,
};
