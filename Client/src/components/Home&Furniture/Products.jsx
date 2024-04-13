import React from 'react'
import Text from './Text'




function Products() {
  return (
    <div className='h-min w-full mt-20'>
        <Text/>
        <h2 className='text-4xl text-center font-general '>Fresh <span className='text-4xl text-center font-general font-bold tracking-wider underlineblue'>arrivals</span> </h2>

        <div class="grid grid-cols-4 gap-4 mt-12 px-10">
            <div class="bg-gray-200 h-96 flex justify-center items-center">1</div>
            <div class="bg-gray-300 h-96 flex justify-center items-center">2</div>
            <div class="bg-gray-400 h-96 flex justify-center items-center">3</div>
            <div class="bg-gray-500 h-96 flex justify-center items-center">4</div>
        </div>
     
    </div>
  )
}

export default Products;