import React from 'react';
import {Link} from "react-router-dom";
import Cart_empty from '../../assets/image/Cart_empty.png'

const CartEmpty = (props) => {
    return (
        <div className="cart_empty">
            <h2>
                В корзине пока ничего нет <span>😕</span>
            </h2>
            <p>
                Вероятней всего, вы не заказывали ещё лекарство.
                <br />
                Для того, чтобы заказать лекарство, перейди на главную страницу.
            </p>
            <img src={Cart_empty} alt="Empty cart" /> <br/>
            <Link to="/" className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    );
}

export default CartEmpty;