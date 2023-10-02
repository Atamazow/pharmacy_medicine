import React, { useEffect, useState } from "react";
import styled from "./OneMedicineBlock.module.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import PlusIcon from "../../assets/icon/Plus_Icon";
import MinusIcon from "../../assets/icon/Minus_icon";
import {useDispatch} from "react-redux";
import {addItems} from "../../redux/slices/cartSlice";
function OneMedicineBlock(props) {
  const [medicine, setMedicine] = useState();
   const [count, setCount] = useState(1);
  const dispatch = useDispatch()
   const { id } = useParams();
  const onClickAdd = () => {
    dispatch(addItems({medicine}))
  }
  useEffect(() => {
    async function medicineFetch() {
      try {
        const { data } = await axios.get(
          `https://6368ce8715219b84960742ec.mockapi.io/medicine/${id}`
        );
        setMedicine(data);
      } catch (error) {
        console.log(error);
      }
    }
    medicineFetch();
  }, []);
  if (!medicine) {
    return <div>Загрузка</div>;
  }
  return (
    <div className="wrapper_one_medicine">
      <img className="image_one_medicine" src={medicine.imageUrl} alt="" />
      <div className="one_medicine_date">
        <h2>{medicine.name}</h2>
        <p>{medicine.Manufacturer}</p>
        <span className={styled.price_text}>
          Цена действительна только при бронировании на сайте и может отличаться
          от цен в аптеках.
        </span>
        <div className={styled.wrapper_cart_btn}>
          <div className={styled.cart} onClick={onClickAdd}>В корзину</div>
          <div className={styled.wrapper_count}>
            <button
              disabled={count <= 1}
              onClick={() => setCount((prev) => prev - 1)}
            >
              <MinusIcon />
            </button>
            <span>{count}</span>
            <button onClick={() => setCount((prev) => prev + 1)}>
              <PlusIcon />
            </button>
          </div>
        </div>
        <div className={styled}></div>
      </div>
    </div>
  );
}

export default OneMedicineBlock;
