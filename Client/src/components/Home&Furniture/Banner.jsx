import React from 'react'
import demoFurnitureBanner from '../../assets/demoFurnitureBanner.jpeg';

function Banner() {
  return (
    <div className='mt-24'>
        <div className='py-10'>
        <h2 className='text-center text-lg py-2 underline'>20% OFF ON OAKWOOD FURNITURE</h2>
        <h2 className='text-5xl text-center font-general '>Modern furniture <br /> basic <span className='text-5xl text-center font-general font-bold tracking-wide underlineblue'>collection</span> </h2>
        </div>
        
        
        <div className='mt-14'>
            <img src={demoFurnitureBanner} alt="" />

            {/* <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-20 h-44 w-44 bg-white rounded-full overflow-hidden border-4 border-black'></div> */}
        </div>
    </div>
  )
}

export default Banner