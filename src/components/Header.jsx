import React from 'react';
import './style.css'
import Logo from '../assets/image/Logo.png'


function Header(props) {
    return (
        <div className='header'>
            <img className='logoPng' src={Logo} alt=""/>
            <h1>Medecine</h1>
        </div>
    );
}

export default Header;