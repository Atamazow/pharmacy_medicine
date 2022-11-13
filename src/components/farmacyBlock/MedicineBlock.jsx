import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedicine } from "../../redux/slices/medicineSlice";
import FullMedicine from "../../pages/FullMedicine";

function MedicineBlock(props) {
  const medicine = useSelector((state) => state.medicineSlice.medicine);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedicine());
  }, [dispatch]);
  return (
    <ul>
      <FullMedicine medicine={medicine} />
    </ul>
  );
}

export default MedicineBlock;
