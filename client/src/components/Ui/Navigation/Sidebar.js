import PropTypes from 'prop-types';
import Burger from './Burger';
import Menu from '../../Menu';

export default function Sidebar({
  open,
  show,
  setOpen,
  myProfile,
  styleguide,
  handleShow,
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
  show: PropTypes.bool,
  setOpen: PropTypes.func,
  styleguide: PropTypes.bool,
  handleShow: PropTypes.func,
  myProfile: PropTypes.object,
};
