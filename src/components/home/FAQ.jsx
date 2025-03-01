import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Heading from "./Heading";

const faqData = [
  {
    question: "What is BMI?",
    answer: "BMI stands for Body Mass Index, which is a measure of body fat based on height and weight.",
  },
  {
    question: "How is BMI calculated?",
    answer: "BMI is calculated using the formula: weight (kg) / (height (m) * height (m)).",
  },
  {
    question: "What are the BMI categories?",
    answer:
      "Underweight: BMI < 18.5, Normal weight: 18.5–24.9, Overweight: 25–29.9, Obesity: BMI ≥ 30.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="md:px-20 p-6 bg-gray-50 rounded-lg shadow-lg md:my-[100px] my-8">
      <Heading title="Frequent asked questions" />
      <ul className="space-y-4">
        {faqData.map((faq, index) => (
          <li key={index} className="border md:mt-0 mt-3 border-gray-300 rounded-lg overflow-hidden shadow-md">
            <button
              className={`w-full text-left px-4 py-5   hover:bg-primary_dark hover:text-white font-medium  flex justify-between items-center ${activeIndex === index ? "bg-primary_dark text-white" : "text-primary_dark"} text-xl font-bold`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {activeIndex === index ? <FaEye /> : <FaEyeSlash />}
            </button>
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden bg-primary_dark text-white ${activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
            >
              <div className="px-4 py-3 ">{faq.answer}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
