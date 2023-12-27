import React, { Suspense, lazy } from 'react'
import HorizontalScrollCards from '../components/horizontalScrollCards';
const Header = lazy(()=>import('../components/header')) ;
const CategoryGrid = lazy(()=>import('./components/categoryGrid')) ;
const Footer = lazy(()=>import('../components/footer'));
const Carousel = lazy(()=>import('../components/carousel'));

const Home = () => {

  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Header/>
      </Suspense>
        
      <Suspense fallback={<>Loading...</>}>
        <Carousel/>
      </Suspense>
        {/* <HorizontalScrollCards id={0}/>
        <HorizontalScrollCards id={1}/> */}
          <div className='mx-14'>
            <div className='grid auto-col-grid items-center'>
              <CategoryGrid/>
              <CategoryGrid/>
              <CategoryGrid/>
              <CategoryGrid/>
              <CategoryGrid/>
              <CategoryGrid/>
            </div>
          </div>
        {/* <HorizontalScrollCards id={2}/> */}
        <Footer/>
    </>
  )
}

export default Home;
