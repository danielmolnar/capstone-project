import PropTypes from 'prop-types';
import Burger from './Burger';
import Menu from '../../Menu';

export default function Sidebar({
  open,
  setOpen,
  show,
  handleShow,
  myProfile,
  styleguide,
}) {
  return (
    <>
      <Burger
        open={open}
        setOpen={setOpen}
        show={show}
        handleShow={handleShow}
        styleguide={styleguide}
      />
      <Menu
        open={open}
        setOpen={setOpen}
        myProfile={myProfile}
        styleguide={styleguide}
      />
    </>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  show: PropTypes.bool,
  handleShow: PropTypes.func,
};
