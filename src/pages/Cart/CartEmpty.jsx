import React from 'react';
import cartEmptyImg from "../../assets/image/empty-cart.png"
import {Link} from "react-router-dom";

const CartEmpty = (props) => {
    return (
        <div className="cart_empty">
            <h2>
                Корзина пустая <span>😕</span>
            </h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.
                <br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartEmptyImg} alt="Empty cart" /> <br/>
            <Link to="/" className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    );
}

export default CartEmpty;