import React from 'react'
import Card from '../components/card';
import { FaCaretLeft,FaCaretRight } from "react-icons/fa";

const HorizontalScrollCards = (props) => {

    function scrollCondition(id){
        const cards = document.querySelectorAll(".home").item(id),
        prevBtn = document.querySelectorAll(".prev").item(id),
        nextBtn = document.querySelectorAll(".next").item(id);
        if(cards.scrollLeft === 0){
          prevBtn.style.display = "none";
        }else{
          prevBtn.style.display = "unset";
        }
    
        if(cards.scrollLeft+cards.clientWidth === cards.scrollWidth){
          nextBtn.style.display = "none";
        }else{
          nextBtn.style.display = "unset";
        }
    }
    
    function prev(id){
    const cards = document.querySelectorAll(".home").item(id);
    cards.scrollLeft -= cards.clientWidth
    }

    function next(id){
    const cards = document.querySelectorAll(".home").item(id);
    cards.scrollLeft += cards.clientWidth
    }

  return (
    <>
        <div className='relative'>
        <button onClick={()=>prev(props.id)} className='p-3 rounded-full shadow-lg flex items-center absolute top-[45%] left-[2%] z-10 prev '><FaCaretLeft/></button>
        <button onClick={()=>next(props.id)} className='p-3 rounded-full shadow-lg flex items-center absolute top-[45%] right-[2%] z-10 next'><FaCaretRight/></button>
        <div onScroll={()=>scrollCondition(props.id)}  className='home overflow-hidden justify-center items-center mx-14 relative'>
            <div className='cards grid grid-flow-col gap-5 mx-auto py-[20px]'>
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
    </>
  )
}

export default HorizontalScrollCards