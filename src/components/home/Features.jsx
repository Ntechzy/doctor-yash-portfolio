import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Features = () => {
  return (
    <div className="text-white font-bold flex flex-row bg-primary_dark  my-10 shadow-lg">
      <div className="md:-rotate-90 hidden md:flex  md:w-6 md:h-10   items-center  md:mt-[9.4rem] md:ml-9 md:justify-center bg-[#01616381] shadow-xl md:text-center md:text-[45px] text-shadow-lg">
        <p className="-pb-2 p-2 shadow-lg -mb-2">ACHIEVEMENT</p>
      </div >
      <div className="w-[90%] m-auto">
        <p className="text-center mt-3 text-2xl md:hidden">  ACHIEVEMENT</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {/* Image with reduced gap by adjusting margin and padding */}
          <div className="w-[250px] h-[320px] my-3 mx-1 p-2 border border-gray-400 shadow-lg">
            <img src="/assets/cf3.jpg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="w-[250px] h-[320px] my-3 mx-1 p-2 border border-gray-400 shadow-lg">
            <img src="/assets/cf4.jpg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="w-[250px] h-[320px] my-3 mx-1 p-2 border border-gray-400 shadow-lg">
            <img src="/assets/cf1.jpg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="w-[250px] h-[320px] my-3 mx-1 p-2 border border-gray-400 shadow-lg">
            <img src="/assets/cf2.jpg" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
