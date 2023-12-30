import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import {QueryClient, QueryClientProvider,} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const Product = lazy(()=>import('./screens/components/product'));
const Newreleases = lazy(()=>import('./screens/components/newreleases')) ;
const Home = lazy(()=>import('./screens/home/home')) ;
const Addtocart = lazy(()=>import('./screens/components/cart')) ;
const ShoppingCart = lazy(()=>import('./screens/components/shoppingcart')) ;
const Savedaddress = lazy(()=>import('./screens/components/savedaddress')) ;
const AddProduct = lazy(()=>import('./screens/addProduct/addProduct')) ;
const Wishlist = lazy(()=>import('./screens/components/wishlist')) ;


const App = () => {
  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false
      }
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Suspense fallback={<>Loading...</>}><Home/></Suspense>}/>
        <Route path='/product/:id' element={<Suspense fallback={<>Loading...</>}><Product/></Suspense>}/>
        <Route path='/cart' element={<Suspense fallback={<>Loading...</>}><Addtocart/></Suspense>}/>
        <Route path='/paymentdetails' element={<Suspense fallback={<>Loading...</>}><ShoppingCart/></Suspense>}/>
        <Route path='/category' element={<Suspense fallback={<>Loading...</>}><categoryList/></Suspense>}/>
        <Route path='/payment' element={<Suspense fallback={<>Loading...</>}><Savedaddress/></Suspense>}/>
        <Route path='/add' element={<Suspense fallback={<>Loading...</>}><AddProduct/></Suspense>}/>
        <Route path='/wishlist' element={<Suspense fallback={<>Loading...</>}><Wishlist/></Suspense>}/>
        <Route path='/newreleases' element={<Suspense fallback={<>Loading...</>}><Newreleases/></Suspense>}/>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App;
