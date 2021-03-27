import styled from 'styled-components';
import PropTypes from 'prop-types';
import Burger from './Burger';
import Menu from './Menu';
import { device } from '../services/device';

export default function Sidebar({ open, setOpen }) {
  return (
    <BurgerWrapper>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </BurgerWrapper>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

const BurgerWrapper = styled.div`
  /* position: fixed; */
  /* bottom: 0; */
  /* left: 0; */
  z-index: 9999999999999999;
  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;
