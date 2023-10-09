import React from "react";
import "./style.css";
import Logo from "../assets/image/log.png";
import Search from "../pages/search/Search";
import Cart_Icon from "../assets/icon/Cart_Icon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header(props) {
  const { items, totalPrice } = useSelector((state) => state.cartSlice);
  const totalCount = items.reduce((sum, item) => item.count + sum,0)
  return (
    <div className="header">
      <Link to="/">
        <div className="logo_title">
          <img className="logoPng" src={Logo} alt="" />
          <h1>Medecine</h1>
        </div>
      </Link>

      <Search />
       <Link to='/cart'>
           <div className="cart_btn">
               <span className='total_price'> {totalPrice}</span>
               <div className="border-right"></div>
               <div className="cart_logo">
                   <Cart_Icon totalCount={totalCount} items={items} />
               </div>
           </div>
       </Link>
    </div>
  );
}

export default Header;
