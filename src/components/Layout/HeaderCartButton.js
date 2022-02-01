import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  //get items from the context in order to know if a new item was added to the cart 
  //and as a result of it display effect
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //here we assign additional class bump to teh button if btnIsHighlighted is true
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  //if we don't have any items in the cart 
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    //if the number of items is changed then we set the state variable setBtnIsHighlighted to true and 
    //add the class bump to the button
    setBtnIsHighlighted(true);

    //then after 300 miliseconds we set the state variable setBtnIsHighlighted back to false and
    //as a resu;lt of it remove bump class from thr button 
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    //here we just clean timer
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
