import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  //initialize state variables
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    //we use this function from the state management 
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  //onShowCart - is the pointer that we create to point to showCartHandler function
  //we can name this pointer however we want but we usuaally start it with 'on'   
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
