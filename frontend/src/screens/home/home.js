import React from 'react'
import HorizontalScrollCards from '../components/horizontalScrollCards';
import Header from '../components/header';
import CategoryGrid from './components/categoryGrid' ;
import Footer from '../components/footer';
import Carousel from '../components/carousel';

const Home = () => {


  return (
    <>
        <Header/>
        <Carousel/>
        <HorizontalScrollCards id={0} params={{"category":"watch"}}/>
        <HorizontalScrollCards id={1} params={{"category":"mobile"}}/>
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
        <HorizontalScrollCards id={2} params={{"category":"decoration"}}/>
        <Footer/>
    </>
  )
}

export default Home;
