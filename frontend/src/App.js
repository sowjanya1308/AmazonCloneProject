import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/home/home';
import Login from './screens/auth/login/login';
import Register from './screens/auth/register/register';
import Forgotpass from './screens/auth/forgotpassword/forgotpass';
import Product from './screens/components/product';



const App = () => {
  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>
      <Route path='/forgotpassword' Component={Forgotpass}/>
      <Route path='/description' Component={Product}/>
    </Routes>
  )
}

export default App;
