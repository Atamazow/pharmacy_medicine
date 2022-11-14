import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function OneMedicineBlock(props) {
  const [medicine, setMedicine] = useState();

  const { id } = useParams();
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
      <div className='one_medicine_date'>
        <h2>{medicine.name}</h2>
        <p>{medicine.Manufacturer}</p>
      </div>
    </div>
  );
}

export default OneMedicineBlock;
