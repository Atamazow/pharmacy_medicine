import React from 'react';
import './style.css'
import Logo from '../assets/image/Logo.png'
import Search from "../pages/search/Search";


function Header(props) {
    return (
        <div className='header'>
            <img className='logoPng' src={Logo} alt=""/>
            <h1>Medecine</h1>
            <Search/>
        </div>
    );
}

export default Header;