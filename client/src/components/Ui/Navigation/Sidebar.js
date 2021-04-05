import PropTypes from 'prop-types';
import Burger from './Burger';
import Menu from '../../Menu';

export default function Sidebar({ open, setOpen, myProfile, styleguide }) {
  return (
    <>
      <Burger open={open} setOpen={setOpen} styleguide={styleguide} />
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
  styleguide: PropTypes.bool,
  myProfile: PropTypes.object,
};
