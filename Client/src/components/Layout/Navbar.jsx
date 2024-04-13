import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

// border-b-2 border-b-neutral-100
function Navbar() {
  return (
    <>
    <div className='h-8 w-full bg-black flex justify-between items-center px-10'>
      <div>
        <h2 className='text-white tracking-wider text-sm'>Register now and get an extra 10% off using the codeHONGO10</h2>
      </div>
       
      <div className='flex text-white gap-4 text-sm'>
        <div>
          <h2><i class="fa-regular fa-envelope"></i> Support</h2>
        </div>

        <div>
          <h2><i class="fa-solid fa-earth-americas"></i> Store Location</h2>
        </div>

        <div>
          <h2><i class="fa-solid fa-phone"></i> 000-1010-111</h2>
        </div>
      </div>
    </div>

      <div className='h-20 rajdhani-medium flex justify-around items-center text-black px-2 '>

      <div className='flex justify-center items-center gap-4'>
        <div className='inline md:hidden'>
        <i class="fa-solid fa-bars text-xl"></i>
        </div>
        <h2 className='rajdhani-medium text-2xl'>FUSION HOME</h2>
      </div>

      <div className='font-semibold hidden md:inline'>
        <ul className='flex gap-8 text-xl'>
          <Link to="/Home&Fur" className='underlineLi'>Home & Furniture</Link>
          <li>Beauty & Personal Care</li>
          <li>Kitchen & Dining</li>
          <li>Clothing & Accessories</li>
        </ul>
      </div>

      <div className='flex gap-4 text-lg text-black'>
        <Link to="/product">Add Product</Link>
        <h2>Search</h2>
        <Link to="/nonexistent">Login</Link>
        <button><i class="fa-regular fa-heart"></i></button>
        <button><i class="fa-solid fa-bag-shopping"></i></button>
      </div>
      </div>
    </>
  )
}

export default Navbar