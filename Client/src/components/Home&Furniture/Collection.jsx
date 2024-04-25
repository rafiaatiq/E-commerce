import React, { useEffect, useState } from 'react'


function Collection() {
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
    <div>
        <div className='h-24 bg-slate-200 flex justify-center items-center'>Collection</div>
        
        <div className='flex mt-10'>
            <div className='h-96 w-72'>
                <h2 className='text-xl mt-5 font-medium ml-4'>Collections</h2>
                <p className='text-lg font-light ml-4 mt-2 py-1 text-[#828282]'>Modern chair</p>
                <p className='text-lg font-light ml-4 text-[#828282]'>Wooden lamp</p>
                <p className='text-lg font-light ml-4 py-1 text-[#828282]'>Living chair</p>
                <p className='text-lg font-light ml-4 text-[#828282]'>Unique table</p>
                
                <div className='h-2 w-44 border-t-2 ml-4 mt-4'></div>

                <div>
                    <h2 className='text-xl mt-2 font-general font-medium ml-4'>Availability</h2>

                    <div className='ml-4 mt-1 flex justify-between items-center'>
                        <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1" className='ml-2'>In Stock</label>
                        </div>
                    
                        <h2 className='mr-4 text-[#828282]'>(04)</h2>
                    </div>

                    <div className='ml-4 mt-2 flex justify-between items-center'>
                        <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1" className='ml-2 '>Out of Stock</label>
                        </div>
                    
                        <h2 className='mr-4 text-[#828282]'>(00)</h2>
                    </div>

                </div>

                <div className='h-2 w-44 border-t-2 ml-4 mt-4'></div>

                <div>
                    <h2 className='text-xl mt-2 font-general font-medium ml-4'>Price</h2>

                    <div className='ml-4 mt-1'>
                        <div>
                        <input type="range" id="volume" name="volume" min="0" max="11" />
                        </div>
                    
                       <h2 className='text-[#828282]'>Price: $0.00 - $299</h2>
                    </div>


                </div>
            </div>

            <div className=' w-full'>
                <div className='h-12 w-[95%] m-auto mt-4 flex justify-between items-center'>
                    <div>Showing of 16 products</div>
                    <div>Sort by: Feature</div>
                </div>
                <div class="grid grid-cols-3 gap-2 px-12">
                    {data?.map((el) => (
                        <div className='card cursor-pointer h-[26rem] w-[21rem] flex flex-col items-center'>

                            <div className='h-80 w-64 mt-6 relative'>
                                <img  src={el.image.url} className='w-full h-full' alt="no image" />
                                <div className='h-8 w-16 bg-green-600 text-white flex justify-center items-center tracking-wide text-sm rounded-lg absolute top-0 m-3'>{el.stock_quantity ? "Sale" : "Sold Out"}</div>
                            </div>
                            
                            <h1 className='mt-2.5 font-general font-bold text-lg px-4 text-center'>{el.name}</h1>
                            <div className='flex gap-4'>
                                <h1 className='font-general line-through font-light tracking-wide text-lg text-[#828282]'>$150</h1>
                                <h1 className='font-general font-light tracking-wide text-lg text-[#828282]'>${el.price}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Collection