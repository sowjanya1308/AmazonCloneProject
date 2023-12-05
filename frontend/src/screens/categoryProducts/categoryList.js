import React from 'react'
import Filters from '../components/filters'
import Card from '../components/card'
import Header from '../components/header'

const categoryList = () => {
  return (
    <div>
        <Header/>
        <div className='flex '>
            <div className='overflow-y-auto overflow-x-hidden h-[100vh] w-auto pr-20 sticky top-0 pb-3'>
                <Filters/>
            </div>
            <div className='cards grid auto-col-grid-250 gap-5 ml-5 py-[20px] m-5'>
              <Card id={0}/>
              <Card id={1}/>
              <Card id={2}/>
              <Card id={3}/>
              <Card id={4}/>
              <Card id={5}/>
              <Card id={6}/>
              <Card id={7}/>
              <Card id={8}/>
              <Card id={9}/>
              <Card id={10}/>
              <Card id={11}/>
              <Card id={12}/>
              <Card id={13}/>
              <Card id={14}/>
              <Card id={15}/>
              <Card id={16}/>
              <Card id={17}/>
              <Card id={18}/>
              <Card id={19}/>
            </div>
        </div>
    </div>
  )
}

export default categoryList