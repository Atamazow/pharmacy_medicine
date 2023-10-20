import './scss/app.scss';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import OneMedicineBlock from './pages/OneMedicineBlock/OneMedicineBlock';
import Header from './components/Header';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './pages/Cart/Cart';
function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicine/:id" element={<OneMedicineBlock />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
