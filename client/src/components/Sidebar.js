import Burger from './Burger';
import Menu from './Menu';

import React from 'react';

export default function Sidebar({ open, setOpen }) {
  return (
    <div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
}
