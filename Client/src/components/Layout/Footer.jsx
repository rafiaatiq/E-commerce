// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-[#f4f4f4] text-black  py-4 static bottom-0 mt-10">
      <div className="py-10 container mx-auto flex justify-center items-center gap-4">

        <div className='h-min w-80'>
          <h1 className='font-bold text-3xl'>FUSION HOME</h1>
          <p className='mt-4 text-[#828282]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, soluta?</p>

          <div className='flex gap-4 text-xl mt-6'>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-threads"></i>
          </div>
        </div>

        <div className='h-min w-52'>
          <h1 className='font-medium text-xl'>Collections</h1>
          <p className='mt-4 text-[#828282]'>Home & Furniture</p>
          <p className='mt-1 text-[#828282]'>Beauty & Personal Care</p>
          <p className='mt-1 text-[#828282]'>Kitchen & Dining</p>
          <p className='mt-1 text-[#828282]'>Clothing & Accessories</p>
        </div>

        <div className='h-min w-36 mt-5'>
          <h1 className='font-medium text-xl'>Information</h1>
          <p className='mt-4 text-[#828282]'>About us</p>
          <p className='mt-1 text-[#828282]'>Our services</p>
          <p className='mt-1 text-[#828282]'>Latest news</p>
          <p className='mt-1 text-[#828282]'>Best sellers</p>
          <p className='mt-1 text-[#828282]'>Contact us</p>
        </div>

        {/* <div className='h-min w-44 mt-5'>
          <h1 className='font-medium text-xl'>Services</h1>
          <p className='mt-4 text-[#828282]'>Customer support</p>
          <p className='mt-1 text-[#828282]'>Terms & conditions</p>
          <p className='mt-1 text-[#828282]'>Returns & exchanges</p>
          <p className='mt-1 text-[#828282]'>Contact us</p>
          <p className='mt-1 text-[#828282]'>Shipping & delivery</p>
        </div> */}

        <div className='h-min w-96 mt-[-5rem]'>
          <h1 className='font-medium text-xl'>Sign Up for News Letter</h1>
          <input className='mt-4 p-1 w-60 bg-transparent border-2 border-gray-400' type="text" placeholder='Enter Your Email'/>
          <button className='h-9 w-24 bg-black text-white '>Subscribe</button>
        </div>
         
      </div>
    </footer>
  );
}

export default Footer;
