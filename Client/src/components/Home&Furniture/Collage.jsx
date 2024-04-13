import React from 'react'
import product from '../../assets/product.jpeg'
import Collage1 from '../../assets/Collage1.jpeg'
import Collage2 from '../../assets/ Collage2.jpeg'
import Collage3 from '../../assets/Collage3.jpeg'
import Collage4 from '../../assets/Collage4.jpeg'
import Collage5 from '../../assets/Collage5.jpeg'
import Collage6 from '../../assets/Collage6.jpeg'
import Collage7 from '../../assets/Collage7.jpeg'




function Collage() {
  return (
    <div className='h-min w-full mt-20'>

        <h2 className='text-4xl text-center font-general font-bold tracking-wider'>TRENDING</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 lg:px-20 xl:px-32 mt-10">
    <div class="md:h-[36rem] flex justify-center items-center">
        <img src={Collage5} class='h-full w-full object-cover' />
    </div>
    <div class="bg-gray-300">
        <div class="grid grid-cols-2 grid-rows-2">
            <div class="bg-gray-400 md:h-72 flex justify-center items-center">
                <img src={Collage6} class='h-full w-full object-cover' />
            </div>
            <div class="bg-gray-500 md:h-72 flex justify-center items-center">
                <img src={Collage4} class='h-full w-full object-cover' />
            </div>
            <div class="bg-gray-600 md:h-72 flex justify-center items-center">
                <img src={Collage2} class='h-full w-full object-cover' />
            </div>
            <div class="bg-gray-700 md:h-72 flex justify-center items-center">
                <img src={Collage7} class='h-full w-full object-cover' />
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Collage