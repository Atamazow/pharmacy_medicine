import React from "react";
import CartEmpty from "./CartEmpty";
import { useSelector } from "react-redux";

function Cart(props) {
  const { items, totalPrice } = useSelector((state) => state.cartSlice);
  if (items >= 0) {
    return <CartEmpty />;
  }
  return <div>В корзине есть товар</div>;
}

export default Cart;
