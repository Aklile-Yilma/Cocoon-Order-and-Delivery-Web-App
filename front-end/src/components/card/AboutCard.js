import CardItem from "./CardItem";
import extImg from "../../assets/images/exteded.svg";
import image1 from "../../assets/images/card1.svg";
import image2 from "../../assets/images/card2.svg";



const AboutCard = () => {
  return (
    <div className="pt-32 overflow-x-hidden ">
      <div className="  flex justify-center items-center -m-4">
        <div className="p-4 w-1/2 sm:w-1/2 lg:w-1/3 ">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div className="p-6 bg-stone-200 hover:bg-stone-400 hover:text-white transition duration-300 ease-in">
              <h1 className="text-2xl font-semibold mb-3">
                About Cocoon
              </h1>
              <p className="leading-relaxed mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
                reprehenderit fuga! Dolores quisquam eius cum accusamus?
              </p>
              <div className="flex items-center flex-wrap "></div>
            </div>
          </div>
        </div>
      </div>

      <div >
        <img className=" pb-22 overflow-hidden md:pl-14 pb-9 h-48 "src={extImg} />
      </div>

      <div className=" md:h-full flex items-center text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <CardItem title="order your food" image={image1}/>
            <CardItem title="from anywhere" image={image2}/>
            <CardItem title="Order your favourites" image={image1}/>
          </div>
        </div>
      </div>
      <div className="py-4 pl-32">
        <button
          className={` mr-5  flex   md: bg-main py-3 w-36  text-xm gap-6 items-center justify-center  font-bold  text-white hover:ring-gray-500 rounded-2xl r block lg:visible `}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
