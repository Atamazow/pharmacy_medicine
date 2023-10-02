import React, {useEffect} from "react";
import Navigation from "../pages/Navigation/Navigation";
import MedicineBlock from "../pages/farmacyBlock/MedicineBlock";
 import Recommended from "../pages/Recommended/Recommended";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";
import {fetchMedicine} from "../redux/slices/medicineSlice";

function Home(props) {
    const categoryId = useSelector(state =>  state.filterSlice.categoryId)
      const dispatch = useDispatch()
    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    const getFarmacy = () => {
        const category = categoryId > 0 ? `categoryId=${categoryId}` : ""
         dispatch(fetchMedicine(category))
    }

    console.log(getFarmacy())

    useEffect(() => {
        getFarmacy()
    },[categoryId])

   return (
    <div>
      <Recommended />
      <Navigation value={categoryId} onChangeCategory={onChangeCategory} />
      <MedicineBlock />
    </div>
  );
}

export default Home;
