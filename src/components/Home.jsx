import React from "react";
import Navigation from "../pages/Navigation/Navigation";
import MedicineBlock from "./farmacyBlock/MedicineBlock";
import Header from "./Header";
import Recommended from "../pages/Recommended/Recommended";

function Home(props) {
  return (
    <div>
      <Recommended />
      <Navigation />
      <MedicineBlock />
    </div>
  );
}

export default Home;
