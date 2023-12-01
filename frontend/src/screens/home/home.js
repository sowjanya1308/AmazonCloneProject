import React from 'react'
import Header from '../components/header';
import Card from '../components/card';
import { FaCaretLeft,FaCaretRight } from "react-icons/fa";

const Home = () => {
  

  function scrollCondition(){
    const cards = document.querySelector(".home"),
    prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next");
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

  function prev(){
    const cards = document.querySelector(".home");
    cards.scrollLeft -= cards.clientWidth
  }

  function next(){
    const cards = document.querySelector(".home");
    cards.scrollLeft += cards.clientWidth
  }

  return (
    <>
      <Header/>
          <div onScroll={scrollCondition}  className='home overflow-hidden justify-center items-center mx-14 relative'>
            <button onClick={prev} className='p-3 rounded-full shadow-lg flex items-center fixed top-[35%] left-[2%] z-10 prev '><FaCaretLeft/></button>
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
            </div>
            <button onClick={next} className='p-3 rounded-full shadow-lg flex items-center fixed top-[35%] right-[2%] z-10 next'><FaCaretRight/></button>
          </div>
      
    </>
  )
}

export default Home;
