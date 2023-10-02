import React, {useState} from 'react';
import "./Navigation.css"

function Navigation({value, onChangeCategory}) {
      const categories = ['Все', 'БАДы и Витамины', 'Средства гигиены', 'Мама и малыш','Питание и спорт', 'Медицинские приборы и изделия']
    return (
        <ul className='navigation'>
            {categories.map((data,i) => (
                <li key={i}
                    onClick={() => onChangeCategory(i)}
                    className={value === i ? 'actived' : ''}
                >
                    {data}
                </li>
            ))}
        </ul>
    );
}

export default Navigation;