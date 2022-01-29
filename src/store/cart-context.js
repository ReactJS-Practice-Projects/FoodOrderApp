import React from 'react';

//context is used instead of State.
//here we declare functions and variables that we use in the context
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;