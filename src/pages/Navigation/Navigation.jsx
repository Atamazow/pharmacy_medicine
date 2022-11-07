import React from 'react';
import "./Navigation.css"

function Navigation(props) {
    const categories = ['Все', 'БАДы и Витамины', 'Средства гигиены', 'Мама и малыш','Питание и спорт', 'Медицинские приборы и изделия']
    return (
        <ul>
            {categories.map((data,i) => (
                <li>
                    {data}
                </li>
            ))}
        </ul>
    );
}

export default Navigation;