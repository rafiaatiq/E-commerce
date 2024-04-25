import React from 'react';

function Cart({ sidebartoggle, setsidebartoggle }) {
  return (
    <div className={`transition-all duration-700 ease-in-out ${sidebartoggle ? "right-0" : "-right-full"} w-[23rem] h-screen bg-white fixed top-0 z-20`} style={{ right: sidebartoggle ? "0" : "-100%" }}>
      <div className='flex justify-between items-center'>
        <i className='fa-solid fa-xmark p-4 text-xl text-black cursor-pointer' onClick={() => setsidebartoggle(!sidebartoggle)}></i>
      </div>
      <hr />
      <div className='flex justify-center items-center h-full'>
        <div className='text-[#828282]'>Your Cart is Empty!</div>
      </div>
    </div>
  );
}

export default Cart;
