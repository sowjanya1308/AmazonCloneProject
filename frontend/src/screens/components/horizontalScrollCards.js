import React from 'react'
import Card from '../components/card';
import { FaCaretLeft,FaCaretRight } from "react-icons/fa";
import {useQuery} from "@tanstack/react-query"
import { getProducts } from '../../redux/productRelated/productHandle';

const HorizontalScrollCards = (props) => {

  const {data,isLoading} = useQuery({
    queryKey:['products',props.params],
    queryFn:()=>getProducts(props.params)
  })

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
              {
                (isLoading)&&<><p>Loading....</p></>
              }
              {
               (!isLoading)&& data.data.data.map((e,index)=>{
                  return <Card key={e.id} id={index} item={e}/>
                })
              }
            </div>
          </div>
        </div>
    </>
  )
}

export default HorizontalScrollCards