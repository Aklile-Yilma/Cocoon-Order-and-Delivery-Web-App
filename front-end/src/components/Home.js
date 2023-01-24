import React from "react";
import image from "../assets/images/pizza1.jpg";
import order from "../assets/images/order.png";
import delivery from "../assets/images/delvery.svg"


function Home() {
  return (
    <div className="flex flex-col mb-6">
      <div className="mb-6">
        <img src={image} alt="" className="z-0 h-[100vh] w-[100vw]" />
      </div>
      <div className="mt-6 flex flex-col md:flex-row justify-center">
        <div className="flex flex-col items-center md:w-[30%]">
          <img src={delivery} alt="" className="md:w-[75%] w-[40%] mb-3" />
          <div className="flex flex-col items-center p-5 md:w-[100%] w-[75%] ">
            <h1 className="md:text-xl text-base font-bold ">Fast Delivery</h1>
            <div className="w-[50px] h-[2px] bg-main mt-2 mb-4"></div>
            <p className="text-center">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-[30%]">
          <img src={order} alt="" className="md:w-[75%] w-[40%] mb-3" />
          <div className="flex flex-col items-center p-5 md:w-[100%] w-[75%] ">
            <h1 className="md:text-xl text-base font-bold ">Fresh Food</h1>
            <div className="w-[50px] h-[2px] bg-red-500 mt-2 mb-4"></div>
            <p className="text-center">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-[30%]">
          <img src={order} alt="" className="md:w-[75%]  w-[40%] mb-3" />
          <div className="flex flex-col items-center p-5 md:w-[100%] w-[75%] ">
            <h1 className="md:text-xl text-base font-bold ">
              A Variety of Food
            </h1>
            <div className="w-[50px] h-[2px] bg-red-500 mt-2 mb-4"></div>
            <p className="text-center">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
