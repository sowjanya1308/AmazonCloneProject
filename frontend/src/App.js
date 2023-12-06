import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/home/home';
import Product from './screens/components/product';
import Addtocart from './screens/components/addtocart';
import ShoppingCart from './screens/components/shoppingcart';
import categoryList from './screens/categoryProducts/categoryList';
import Savedaddress from './screens/components/savedaddress';



const App = () => {
  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/product' Component={Product}/>
      <Route path='/cart' Component={Addtocart}/>
      <Route path='/paymentdetails' Component={ShoppingCart}/>
      <Route path='/category' Component={categoryList}/>
      <Route path='/payment' Component={Savedaddress}/>
    </Routes>
  )
}

export default App;
