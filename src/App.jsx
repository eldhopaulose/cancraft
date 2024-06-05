import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarWithBurgerMenu } from './pages/SidebarWithBurgerMenu/SidebarWithBurgerMenu';
import Crop from './pages/Crop/Crop';
import Home from './pages/Home';
import MyOrder from './pages/MyOrder/MyOrder';
import { Nav } from './pages/Nav/Nav';
import './App.css';

function App() {
  return (
    <>

      <Router>
        <div className='absolute'> <SidebarWithBurgerMenu /></div>

        <Nav />




        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Crop' element={<Crop />} />
          <Route path='/MyOrder' element={<MyOrder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
