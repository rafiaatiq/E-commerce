import React, { useState } from 'react'
// import product from '../assets/product.jpeg'
// import KitchenCover from '../assets/KitchenCover.jpeg'
import Sofa from '../../assets/Sofa.jpeg';
import { Link } from 'react-router-dom';
// import ClotihngCover from '../assets/ClotihngCover.jpeg'

const slides = [
    Sofa
]


function Hero() {
    const [cur, setCur] = useState(0);

    const prev = () => setCur((cur) => (cur == 0 ? slides.length - 1 : cur - 1))
    const next = () => setCur((cur) => (cur == slides.length - 1 ? 0 : cur + 1))
  return (
    
    <div className='overflow-hidden relative m-auto mt-2' >
        <div className=' h-[42rem] w-full px-8 flex transition-transfrom ease-out duration-500 bg-cover bg-center' style={{transform: `translateX(-${cur * 100}%)`}}>
            {slides.map((s)=> (
                <img src={s} className='h-full w-full object-cover rounded-xl'/>
            ))}
        </div>   
        <h2 className='font-general font-light absolute top-[11rem] left-[10rem] text-2xl'>New Furniture Collection</h2>
            <h2 className='absolute top-[14rem] left-[10rem] text-6xl tracking-wide rajdhani-bold'>MODERN CABINET</h2>
            <h2 className='absolute top-[18rem] left-[10rem] text-6xl tracking-wide rajdhani-bold'>COMFORT  SOFA</h2>
            <Link to='/collection' className='absolute top-[23rem] left-[10rem] text-lg h-12 w-44 flex justify-center items-center bg-black text-white rounded-lg'>View Collections</Link>
            <button className='absolute top-[23rem] left-[3rem] text-2xl h-10 w-10 bg-white rounded-full' onClick={prev}>
            <i class="fa-solid fa-chevron-left"></i>
            </button>

            <button className='absolute top-[23rem] right-[3rem] text-2xl h-10 w-10 bg-white rounded-full' onClick={next}>
            <i class="fa-solid fa-chevron-right"></i>
            </button>
            
    </div>
 
  )
}

export default Hero