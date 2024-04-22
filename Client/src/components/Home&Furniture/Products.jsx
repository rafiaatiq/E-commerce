import React, { useState, useEffect } from 'react'
import Text from './Text'
import "../../App.css";
import { Link } from 'react-router-dom';

function Products() {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000/products", {

      })
      const result = await response.json();

      if(!response.ok){
        console.log(result.error);
        setError(result.error);
      }
      if(response.ok){
        console.log(result);
        setData(result);
      }
    }

    getData();
  }, [])
  
  return (
    <Link to="" className='h-min w-full mt-20'>
        <Text/>
        <h2 className='text-5xl text-center font-general mt-10'>Fresh <span className='text-5xl text-center font-general font-bold tracking-wide underlineblue'>arrivals</span> </h2>

        <div class="grid grid-cols-4 gap-2 mt-12 px-20">
          {data?.map((el) => (
            <div className='card cursor-pointer h-[30rem] flex flex-col items-center'>

              <div className='h-80 w-64 bg-white mt-6 relative'>
                <img  src={el.image.url} className='w-full h-full' alt="no image" />
                <div className='h-8 w-16 bg-green-600 text-white flex justify-center items-center tracking-wide text-sm rounded-lg absolute top-0 m-3'>{el.stock_quantity ? "Sale" : "Sold Out"}</div>
              </div>

              <div className='flex text-lg mt-4 text-yellow-400'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              
              <h1 className='mt-1 font-general font-bold text-lg px-4 text-center'>{el.name}</h1>
              <div className='flex gap-4'>
                <h1 className='font-general line-through font-light tracking-wide text-lg text-[#828282]'>$150</h1>
                <h1 className='font-general font-light tracking-wide text-lg text-[#828282]'>${el.price}</h1>
              </div>
            </div>
          ))}
        </div>
    </Link>
  )
}

export default Products;