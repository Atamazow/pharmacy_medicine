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
    return <div>Загрузка</div>
  }
  return (
    <div className="container">
      <h2>{medicine.name}</h2>
      <img src={medicine.imageUrl} alt=""/>
    </div>
  );
}

export default OneMedicineBlock;
