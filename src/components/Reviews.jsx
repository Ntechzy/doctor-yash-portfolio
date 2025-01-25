import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    name: "Pawan Tandon",
    image: "https://placehold.co/50X50/EEE/31343C", 
    rating: 5,
    review:
      "My father is a CPR survivor and had a complication in the intestine which required a surgery. It was a risky operation. Dr Arun gave us the advise & a lot of confidence to go thru the surgery. Following his...",
  },
  {
    name: "John Doe",
    image: "https://placehold.co/50X50/EEE/31343C", 
    rating: 4,
    review:
      "Amazing experience with the staff and doctors. They were very professional and helpful throughout the process. Highly recommended!",
  },
  {
    name: "Jane Smith",
    image: "https://placehold.co/50X50/EEE/31343C", 
    rating: 5,
    review:
      "The care provided was excellent. Doctors explained everything clearly and provided great support. Truly grateful for their services.",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setIsAnimating(false);
    }, 500); 
  };

  const prevReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
      );
      setIsAnimating(false);
    }, 500); 
  };

  return (
    <div className=" px-6 py-[82px] bg-gradient-to-r from-teal-200 to-blue-800 rounded-lg shadow-lg flex flex-col md:flex-row gap-10 items-center space-x-8 ">
      {/* Left Section */}
      <div className="text-center flex-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png" 
          alt="Google Reviews"
          className="w-16 mx-auto"
        />
        <h2 className="text-3xl font-bold text-blue-800">Google Reviews</h2>
        <p className="text-lg text-gray-700 font-semibold mt-2">
          5.0{" "}
          <span className="text-yellow-500">
            ★★★★★ <span className="text-gray-500">(207 google review)</span>
          </span>
        </p>
        <button className="mt-4 px-6 py-2 bg-primary_dark text-white rounded-md hover:bg-blue-800">
          View All Reviews on Google
        </button>
      </div>

      {/* Right Section */}
      <div className="relative flex-1">
        <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg  relative overflow-hidden">
            {/* Slider Container */}
            <div className="flex transition-transform duration-500 ease-in-out"
                style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                }}>
            {reviews.map((review, index) => (
                <div
                key={index}
                className="min-w-full flex flex-col space-y-4 items-start"
                >
                <div className="flex items-center space-x-4">
                    <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-white"
                    />
                    <div>
                    <h3 className="text-xl font-semibold text-teal-300">
                        {review.name}
                    </h3>
                    <div className="text-yellow-400">
                        {"★".repeat(review.rating)}{" "}
                        {"☆".repeat(5 - review.rating)}
                    </div>
                    </div>
                </div>
                <p className="text-gray-300">{review.review}</p>
                </div>
            ))}
            </div>

        </div>
        {/* Navigation Buttons */}
        <div className="absolute bottom-[-44px] left-14 transform -translate-x-1/2 flex space-x-4">
            <div className="p-1 bg-white rounded-full w-10 h-10 flex justify-center items-center ">
                <FaArrowLeft onClick={prevReview} className="flex items-center justify-center  cursor-pointer size-5" />
            </div>
            <div className="p-1 bg-white rounded-full w-10 h-10 flex justify-center items-center ">
                <FaArrowRight onClick={nextReview} className="flex items-center justify-center  cursor-pointer size-5" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
