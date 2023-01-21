import {FaBars, FaShoppingCart} from "react-icons/fa"
import image1 from "../../assets/images/cocoonLogo.png";
import image2 from "../../assets/images/profile.png";
import { useState, useEffect } from "react";

const Header =()=>{
    const[open, setOpen]= useState(false)
    const showNavbar = ()=>{
        setOpen(!open)

    }
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect (() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
            setIsScrolled(true)
            }else {
            setIsScrolled(false)
            }
        }
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            
            }
            }, []) 

    return(
            <div className={` ${ isScrolled && "bg-stone-200"} h-20 fixed flex justify-around w-screen md:flex fixed `} >
                <div className="shrink-0 w-30 md:flex">
                    <img src={image1} className="flex-shrink-0 truncate block m-auto flex-row overflow-hidden flex-col w-28"/>
                </div>
                    <div className=" justify-between pl-3.5 block  flex-col">
                        <ul className={` sm:  ${open ? " text-center": "hidden"} md:flex items-center pt-7 pr-3 pl-14 list-none xl:w-auto lg:flex `} >
                            <li className=" align-middle  mr-5"><a href="#" className="no-underline text-black font-bold ">Menu </a></li>
                            <li className=" align-middle mr-5"><a href="#" className="no-underline text-black font-bold">About</a></li>
                            <li className=" align-middle mr-5"><a href="#" className="no-underline text-black font-bold">Contact</a></li>

                        </ul> 
                    </div> 
                
                <div className="flex justify-between md:flex items-center pl-3.5 ">
                    <button className={` mr-5  flex  ${open ?"block": "hidden"}  md:block bg-main py-2 w-36  text-xs gap-6 items-center justify-center  font-bold  text-white hover:ring-gray-500 rounded-2xl r block lg:visible `}>Log out</button>
                    <FaBars className="cursor-pointer md:hidden  flex mr-5 "size={25} onClick={showNavbar} />
                    <button className="mr-5 pl-2" href=" "><FaShoppingCart size={25}/></button>
                    <img src={image2} className=" w-20 mr-5 " alt="profileIcon"></img>

                    
                </div>


                
            
            </div>
        
        
    )
}

export default Header