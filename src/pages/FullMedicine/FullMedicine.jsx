import React from "react";
import { Link } from "react-router-dom";
import { addItems } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function FullMedicine({ id, imageUrl, name, price }) {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const obj = {
      id,
      imageUrl,
      name,
      price
    }
    console.log(id,name,imageUrl,price)
    dispatch(
      addItems(obj)
    );
  };

  return (
    <div className="medicine_block">
      <li key={id} className="medicine_block_list">
        <Link key={id} to={`/medicine/${id}`}>
          <div className="image_medicine_block">
            <img src={imageUrl} alt="" />
          </div>
        </Link>
        <div className="wrapper_medicine_block">
          {name}
          <span className="price_medicine">{price} ₽</span>
          <div className="text">
            ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ. ПЕРЕД ПРИМЕНЕНИЕМ ПРОКОНСУЛЬТИРУЙТЕСЬ СО
            СПЕЦИАЛИСТОМ
          </div>

          <div
            onClick={onClickAdd}
            className="wrapper_cart_medicine_block"
          >
            <button className="cart_medicine_block">В корзину</button>
            <span className="count"></span>
          </div>
        </div>
      </li>
    </div>
  );
}

export default FullMedicine;
