import React from "react";
import {Link} from "react-router-dom";

function FullMedicine({ medicine, id}) {
  return (
    <div className="medicine_block">
      {medicine.map((data) => (
       <Link key={data.id}  to={`/medicine/${data.id}`}>
         <li key={id} className="medicine_block_list">
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
       </Link>

      ))}
    </div>
  );
}

export default FullMedicine;
