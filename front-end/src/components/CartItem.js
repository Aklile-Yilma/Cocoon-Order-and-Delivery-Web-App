import React from "react";
import image from "../assets/images/pizza1.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartItem() {
  return (
    <div className="bg-white text-gray-700 w-full h-[8rem] shadow-lg rounded-md p-1 hover:shadow-gray-400 flex justify-start items-center gap-4 ">
      <div>
        <img
          src={image}
          alt=""
          className="rounded-[100%] w-[70%]  h-[7rem] object-cover m-auto"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xl">special pizza</span>
        <span className="text-main text-xl font-bold">75 birr</span>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center ml-[7rem]">
        <div className="w-40 flex gap-3 items-center justify-start font-bold  text-white bg-main rounded-2xl ">
          <div className="rounded-l-2xl w-[4rem] h-[2.5rem] cursor-pointer hover:bg-blue-400  flex justify-center items-center">
            <RemoveIcon />
          </div>
          <span>3</span>
          <div className=" ml-2 rounded-r-2xl w-[4rem] h-[2.5rem] cursor-pointer hover:bg-blue-400  flex justify-center items-center">
            <AddIcon />
          </div>
        </div>
        <span className="text-main  font-bold">subtotal : 75 birr</span>
      </div>
    </div>
  );
}

export default CartItem;
