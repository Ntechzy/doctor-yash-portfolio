import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/1.png",
      // caption: "I Yash Pandey Welcome You In My Place  ",
    },
    {
      id: 2,
      image: "/assets/2.png",
      // caption: "Your Health, My Priority",
    },
    // {
    //     id: 3,
    //     image: "https://via.placeholder.com/1920x1080?text=Slide+3",
    //     caption: "Modern Facilities for Modern Needs",
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval); 
    }, []);

  return (
    <div className="md:mt-[45px] mt-[60px] relative w-full h-[250px] md:h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 bg-no-repeat bg-contain md:bg-cover  ease-in-out ${
            index === currentIndex ? "translate-x-0" : "-translate-x-full"
          } ${index === currentIndex - 1 ? "translate-x-full" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            // backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        >
            <img src={slide.image} className="w-full h-full" alt="" />
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-4xl lg:text-6xl font-bold drop-shadow-md text-center">
              {slide.caption}
            </h2>
          </div> */}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-300 hover:bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
