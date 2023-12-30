import React from 'react';
import Header from './header';
import HorizontalScrollCards from './horizontalScrollCards';
import {useQuery} from "@tanstack/react-query"
import { getProducts } from '../../redux/productRelated/productHandle';
import Card from './card';


const Newreleases = () => {

  const {data,isLoading, isSuccess} = useQuery({
    queryKey:["products"],
    queryFn:()=>getProducts({"newrelease":"true"}),
  })

  return (
    <>
      <Header/>
      <div className='mt-5 mb-5'>
        <h1 className="text-center text-3xl font-bold mt-8">{isLoading?"Loading...":"New Releases"}</h1>
        <div className='cards grid auto-col-grid-250 gap-5 ml-5 py-[20px] m-5'>
        {
          (isSuccess)&&(
            (data.data.data).map((e,index)=><>
              <Card key={e.id} id={index} item={e} />       
            </>)
          )
        }
        </div>
      </div>
    </>
  )
}

export default Newreleases;
