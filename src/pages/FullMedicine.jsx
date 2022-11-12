import React from "react";

function FullMedicine({ medicine }) {
  return (
    <div className="medicine_block">
      {medicine.map((data) => (
        <li className="medicine_block_list">
          <div className='image_medicine_block'>
            <img src={data.imageUrl} alt="" />
          </div>

          <div className="wrapper_medicine_block">
            {data.name}
            <span className="price_medicine">{data.price} ₽</span>
            <div className="text">
              ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ. ПЕРЕД ПРИМЕНЕНИЕМ ПРОКОНСУЛЬТИРУЙТЕСЬ СО
              СПЕЦИАЛИСТОМ
            </div>
            <div className='wrapper_cart_medicine_block'>
              <button className="cart_medicine_block">В корзину</button>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}

export default FullMedicine;
