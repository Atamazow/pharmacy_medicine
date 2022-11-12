import React from 'react';
import './style.css'
import Logo from '../assets/image/Logo.png'
import Search from "../pages/search/Search";
import Cart_Icon from "../assets/icon/Cart_Icon";


function Header(props) {
    return (
        <div className='header'>
            <div className='logo_title'>
                <img className='logoPng' src={Logo} alt=""/>
                <h1>Medecine</h1>
            </div>
            <Search/>
            <div className='cart'>
                <button> Корзина</button>
                <div className='border-right'></div>
                <div className='cart_logo'>
                    <Cart_Icon />
                </div>

            </div>
        </div>
    );
}

export default Header;