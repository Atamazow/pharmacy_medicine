import React from 'react';
import Navigation from "../pages/Navigation/Navigation";
import MedicineBlock from "./farmacyBlock/MedicineBlock";
import Header from "./Header";

function Home(props) {
    return (
        <div>

            <Navigation/>
            <MedicineBlock/>
        </div>
    );
}

export default Home;
