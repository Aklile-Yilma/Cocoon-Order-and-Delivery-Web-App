import React from "react";

import pic from "../assets/images/contact-img.png";
import location from "../assets/images/loc.svg";
import mail from "../assets/images/mail.svg";
import phone from "../assets/images/phone.svg";

import { FaFacebook, FaTwitter, FaYoutube, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mb-10 ">
      <div>
        <img
          src={pic}
          alt=""
          className="relative h-[40vh] md:h-[50vh] w-[100vw]"
        />
        <div className="w-[100%] absolute top-[10%] md:top-[15%] right-auto flex flex-col items-center">
          <h1 className="text-white text-2xl font-mono font-bold lg:text-3xl">
            Contact
          </h1>
          <div className="bg-main h-2 mt-3 w-[80px] rounded-lg"></div>
        </div>
      </div>
      <div className="md:relative flex-col md:flex ">
        <div className="flex flex-col md:w-[50vw] ">
          <h1 className="text-2xl font-Montez font-bold text-center py-6">
            Contacts
          </h1>
          <div className="flex flex-col items-center">
            <div className="flex flex-row my-3">
              <img src={phone} alt="" className="mr-6 w-[20px]" />
              <span>+252333333333</span>
            </div>
            <div className="flex flex-row my-3">
              <img src={location} alt="" className="mr-6 w-[20px]" />
              <span>Arat kilo, Arada</span>
            </div>
            <div className="flex flex-row my-3">
              <img src={mail} alt="" className="mr-6 w-[20px]" />
              <span>abcde@gmail.com</span>
            </div>
          </div>
          <div className="flex justify-center">
            <ul className="flex justify-center py-5">
              <li className="pr-5">
                <a href="#">
                  <FaFacebook
                    color="#3b5998"
                    className="hover:scale-125 w-[40px] h-[40px]"
                  />
                </a>
              </li>
              <li className="pr-5">
                <a href="#" className="">
                  <FaTwitter
                    color="#00acee"
                    className="hover:scale-125 w-[40px] h-[40px]"
                  />
                </a>
              </li>
              <li className="pr-5">
                <a href="#" className="">
                  <FaYoutube
                    color="#FF0000"
                    className="hover:scale-125 w-[40px] h-[40px]"
                  />
                </a>
              </li>
              <li className="">
                <FaTelegram
                  color="#229ED9"
                  className="hover:scale-125 w-[40px] h-[40px]"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="md:absolute bg-gray-200 rounded-lg m-auto md:top-[-50px] md:left-[50%] flex flex-col w-[80vw] md:w-[40vw] items-center justify-center">
          <h3 className="text-center font-Montez font-bold text-2xl py-5">
            Get In Touch With Us.
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-md p-3 my-2 w-[75%]"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="rounded-md p-3 my-2 w-[75%]"
          />
          <textarea
            type="textArea"
            placeholder="Your Comment"
            className="rounded-md p-3 my-2 w-[75%]"
          />
          <input
            type="submit"
            value="Send"
            className="text-lg rounded-md border font-bold border-red-500 py-3 my-3 w-[100px] hover:bg-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
