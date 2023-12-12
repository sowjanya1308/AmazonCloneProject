import React from 'react'
import Header from '../components/header';
import HorizontalScrollCards from '../components/horizontalScrollCards';
import CategoryGrid from './components/categoryGrid';
import Footer from '../components/footer';
import Carousel from '../components/carousel';

const Home = () => {

  return (
    <>
      <Header/>
        <Carousel/>
        <HorizontalScrollCards id={0}/>
        <HorizontalScrollCards id={1}/>
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
        <HorizontalScrollCards id={2}/>
        <Footer/>
    </>
  )
}

export default Home;
