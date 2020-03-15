import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './burger.styled';

const Burger = ({open, setOpen}) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.prototype = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger;