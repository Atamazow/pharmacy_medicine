import "./scss/app.scss";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import OneMedicineBlock from "./pages/OneMedicineBlock";
import Header from "./components/Header";
import React from "react";
function App() {
  return (
    <>

      <div className="wrapper">
          <Header/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/medicine/:id" element={<OneMedicineBlock />} />
          </Routes>

      </div>
    </>
  );
}

export default App;
