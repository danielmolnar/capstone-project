import styled from 'styled-components';
import PropTypes from 'prop-types';
import Burger from './Burger';
import Menu from './Menu';

import React from 'react';

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
  margin-top: 0.5rem;
`;
