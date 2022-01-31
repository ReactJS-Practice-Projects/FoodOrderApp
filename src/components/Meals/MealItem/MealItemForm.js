import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  //Please NOTE we use this state to output teh error message if teh amount is not valid 
  //the status of the amount is recorded to amountIsValid variable 
  const [amountIsValid, setAmountIsValid] = useState(true);
  
  //instead of using ref we could have used two-way binding 
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    //amountInputRef.current points to teh input field in Input component
    //we use "value" to get value from the input field. It is always a string 
    //and we convert it to number  
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
