import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App(props) {
  const [isShowCart, setIsShowCart] = useState(false);

  const onShowHandler = () => {
    setIsShowCart(true);
  }

  const onHideHandler = () => {
    setIsShowCart(false);
  }

  return (
    <CartProvider>
      {isShowCart && <Cart onClose={onHideHandler} />}
      <Header show={onShowHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
