import React from "react";
import CartEmpty from "./CartEmpty";
import { useSelector } from "react-redux";
import style from "./Cart.module.scss";

function Cart(props) {
  const { items, totalPrice } = useSelector((state) => state.cartSlice);
   if (items >= 0) {
    return <CartEmpty />;
  }
  return (
    <div className={style.cart_wrapper}>
      <div>
        <img src="" alt="" />
        <div></div>
        <div></div>
        <button></button>
      </div>
      <div>  {totalPrice}</div>
      <div>
        <div>
          <button></button>
        </div>
        <div className={style.order}>
          <h2 className={style.title}>Ваш заказ</h2>
          <div className={style.price__general}>
            <div>Cумма заказа: {totalPrice}</div>
            <div>руб</div>
          </div>

          <div className={style.order_btn}>
            <button>Оформить заказ</button>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
