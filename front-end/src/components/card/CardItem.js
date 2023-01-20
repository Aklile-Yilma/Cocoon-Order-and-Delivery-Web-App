
const CardItem = (props) => {
    return (
      <div className="p-4 sm:w-1/2 lg:w-1/3 ">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="block m-auto lg:h-72 md:h-28 w-44 "
            src={props.image}
            alt="cardImages"
          />
          <div className="p-6 hover:bg-gradient-to-r  from-stone-400 to-stone-100 transition duration-300 ease-in">
            <h1 className="text-2xl  font-bold mb-3">{props.title}</h1>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
              reprehenderit fuga! Dolores quisquam eius cum accusamus?
            </p>
            <div className="flex items-center flex-wrap "></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardItem
  