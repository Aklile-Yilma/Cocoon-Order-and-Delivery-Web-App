import {FaBars, FaShoppingCart, FaSearch} from "react-icons/fa"
import image1 from "../../assets/images/cocoonLogo.png";
import image2 from "../../assets/images/profile.png";

const Header =()=>{
   

    return(
        <div className="flex fixed justify-around w-screen pt-12.8"  >
            <div className="flex">
                <img src={image1} className="w-36 "/>
                <div >
                    <ul className=" pt-12 pr-3 pl-20 list-none w-auto " >
                        <li className="inline align-middle  mr-5"><a href="" className="no-underline text-black font-bold ">Menu </a></li>
                        <li className="inline align-middle mr-5"><a href="" className="no-underline text-black font-bold">About</a></li>
                        <li className="inline align-middle mr-5"><a href="" className="no-underline text-black font-bold">Contact</a></li>

                    </ul>
                </div>
            </div>
            <div className="flex items-center pl-3.5">

                <button className=" mr-5 bg-main py-2  w-36 text-xs flex gap-6 items-center justify-center  font-bold  text-white hover:ring-gray-500 rounded-2xl  r  ">Log out</button>
                <button className="mr-5 " href=" "><FaShoppingCart size={25}/></button>
                <img src={image2} className="w-20 mr-5 "></img>
                
            </div>
            
           
        </div>
        
    )
}

export default Header