import React from 'react';
import Header from './header';
import HorizontalScrollCards from './horizontalScrollCards';


const Newreleases = () => {
  return (
    <>
      <Header/>
      <div className='mt-5 mb-5'>
        <h1 className="text-center text-3xl font-bold mt-8">New Releases</h1>
        <HorizontalScrollCards/>
      </div>
    </>
  )
}

export default Newreleases;
