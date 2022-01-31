import React from 'react';

import classes from './Input.module.css';

//we use the function forwardRef to assign the amount to amountInputRef in MealiItemForm component 
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
