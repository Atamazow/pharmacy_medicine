import FullMedicine from "../FullMedicine/FullMedicine";
import {useSelector} from "react-redux";

function MedicineBlock(props) {
    const medicine = useSelector((state) => state.medicineSlice.medicine);
    const med = medicine.map((obj) => <FullMedicine key={obj.id} {...obj}  /> )
  return (
    <ul className="wrapper_medicine">
        {med}
    </ul>
  );
}

export default MedicineBlock;
