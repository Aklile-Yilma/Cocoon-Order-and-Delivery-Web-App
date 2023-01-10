import React from "react";
import image from "../assets/images/pizza1.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
function Product() {
  return (
    <div className="bg-white text-gray-700  h-[15rem] shadow-lg rounded-md p-2 hover:shadow-gray-400">
      <img
        src={image}
        alt=""
        className="rounded-[100%] w-[60%]  h-[8rem] object-cover m-auto"
      />
      <div className="flex items-center justify-center gap-3 p-3">
        <span className="text-xl">special pizza</span>
        <span className="text-blue-700 text-xl font-bold">75 birr</span>
      </div>
      <div className="flex items-center justify-center ">
        <div className="rounded-[100%] w-[3rem]  h-[3rem] object-cover m-auto hover:bg-gray-200 flex justify-center items-center">
          <FavoriteBorderIcon
            fontSize="medium"
            className=" text-main cursor-pointer"
          />
        </div>
        <div className="rounded-[100%] w-[3rem]  h-[3rem] object-cover m-auto hover:bg-gray-200 flex justify-center items-center">
          <VisibilityIcon
            fontSize="medium"
            className=" text-main cursor-pointer"
          />
        </div>
        <div className="rounded-[100%] w-[3rem]  h-[3rem] object-cover m-auto hover:bg-gray-200 flex justify-center items-center">
          <AddShoppingCartIcon
            fontSize="medium"
            className=" text-main cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
