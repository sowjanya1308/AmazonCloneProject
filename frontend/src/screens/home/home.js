import React from 'react'
import Header from '../components/header';
import HorizontalScrollCards from '../components/horizontalScrollCards';
import CategoryGrid from './components/categoryGrid';

const Home = () => {

  return (
    <>
      <Header/>
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
    </>
  )
}

export default Home;
