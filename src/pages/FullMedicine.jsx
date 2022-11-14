import React, { useState } from "react";
import { Link } from "react-router-dom";
import {addItems} from '../redux/slices/cartSlice'
import {useDispatch} from "react-redux";

function FullMedicine({ medicine }) {
  const dispatch = useDispatch()

  const onClickAdd = () => {
    const cartItem = { medicine };
    dispatch(addItems(cartItem))
  }

  return (
    <div className="medicine_block">
      {medicine.map((data) => (
        <li key={data.id} className="medicine_block_list">
          <Link key={data.id} to={`/medicine/${data.id}`}>
            <div className="image_medicine_block">
              <img src={data.imageUrl} alt="" />
            </div>
          </Link>
          <div className="wrapper_medicine_block">
            {data.name}
            <span className="price_medicine">{data.price} ₽</span>
            <div className="text">
              ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ. ПЕРЕД ПРИМЕНЕНИЕМ ПРОКОНСУЛЬТИРУЙТЕСЬ СО
              СПЕЦИАЛИСТОМ
            </div>

            <div onClick={onClickAdd} className="wrapper_cart_medicine_block">
              <button  className="cart_medicine_block">В корзину</button>
              <span className="count"></span>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}

export default FullMedicine;
