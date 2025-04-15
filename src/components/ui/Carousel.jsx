import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/banner1.jpg",
    },
    {
      id: 2,
      image: "/assets/banner2.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
    <section
      id="home"
      className=" relative w-full h-[200px] md:h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 overflow-hidden transition-transform duration-700 bg-no-repeat bg-contain md:bg-cover ease-in-out w-full h-full ${index === currentIndex ? "translate-x-0" : "-translate-x-full"
            } ${index === currentIndex - 1 ? "translate-x-full" : ""}`}
        >
          {/* <div
            className={`absolute inset-0 transition-all duration-500 ${isHovered ? "bg-gray-600 opacity-50" : "opacity-0"
              }`}
            style={{
              transform: isHovered ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "center",
            }}
          /> */}
          <img
            src={slide.image}
            alt="Loading..."
            className="w-full h-full md:object-cover md:mt-5 object-contain"
          />
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
            className={`w-4 h-4 rounded-full cursor-pointer ${currentIndex === index ? "bg-white" : "bg-gray-300 hover:bg-white"
              }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
