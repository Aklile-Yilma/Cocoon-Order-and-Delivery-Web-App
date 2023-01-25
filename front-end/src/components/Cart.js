import React from 'react'
import CartItem from './CartItem';

function Cart() {
  return (
    <div>
      <div className="text-center font-Pacifico font-bold text-4xl ">
        your cart Items
      </div>
      <div className="py-4 px-10  bg-bgMain m-3 mx-5 flex flex-col md:flex-row gap-6">
        <div className="flex flex-col w-full justify-start gap-4  md:w-[60%] h-full">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="bg-white text-gray-700 w-full h-[25rem] shadow-lg rounded-md p-6 hover:shadow-gray-400 flex flex-col  items-center gap-4 md:w-[30%] md:ml-10">
          <span className="text-2xl font-bold">Order Summery</span>
          <span class="h-[1.5px] w-60 bg-gray-400 "></span>
          <span className="text-xl">Subtotal : 25 Birr</span>
          <span class="h-[1.5px] w-60 bg-gray-400 "></span>
          <span className="text-xl">Discount : 10 Birr </span>
          <span class="h-[1.5px] w-60 bg-gray-400 "></span>
          <span className="text-xl font-bold">Total: 12 Birr </span>
          <span class="h-[1.5px] w-60 bg-gray-400 "></span>

          <button className="m-2 mt-10 bg-main py-2  w-56 flex gap-6 items-center justify-center  font-bold  text-white hover:ring-gray-500 rounded-2xl  r ">
            Check Out Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart