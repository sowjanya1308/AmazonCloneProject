import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/home/home';
import Product from './screens/components/product';
import Addtocart from './screens/components/addtocart';



const App = () => {
  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/product' Component={Product}/>
      <Route path='/cart' Component={Addtocart}/>
    </Routes>
  )
}

export default App;
