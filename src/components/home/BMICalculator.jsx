import React, { useState } from "react";
import Heading from "./Heading";

export default function BMICalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const [isOpen, setIsOpen] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight || !age) {
      alert("All Fields are required");
      return;
    }
    const heightInMeters = height / 100;
    const bmiResult = weight / (heightInMeters ** 2) + age / 1000;
    setBMI(bmiResult);
  };

  const getBMICategory = () => {
    if (bmi === null) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 23.5) return "Normal";
    if (bmi > 23.5 && bmi <= 27.5) return "Overweight";
    return "Obese";
  };

  const toggleAnswer = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  const bmiInfo = [
    {
      question: "BMI < 18.5 (Underweight)",
      answer:
        "This means you are UNDERWEIGHT and need advice regarding a healthy diet and lifestyle. You can consult our nutritionist to guide you.",
    },
    {
      question: "18.5 - 23.5 (Normal)",
      answer:
        "Great. Your BMI stands in the NORMAL category and you just need to maintain your healthy lifestyle and regular exercise/yoga. Word of caution- Don’t relax and there’s always room for improvement.",
    },
    {
      question: "23.6 - 27.5 (Overweight)",
      answer:
        "BMI in the above range means you are in the OVERWEIGHT category. You need to bring certain changes in your dietary habits and exercise regularly to take charge of yourself. You can also consult us for liposuction and other body contouring ways to make you look fit/beautiful. P.S- Some people in this range can be healthy, eg. Muscular individuals. So, you need to have your Body Composition Analysis done that calculates the amount of fat, muscle, and bone content.",
    },
    {
      question: "BMI > 27.5 (Obese)",
      answer:
        "Your BMI makes you OBESE. This is a matter of concern as obesity predisposes you to other medical problems like diabetes, blood pressure, heart ailments, joint problems etc. You need to consult our nutritionist for dietary advice and exercise/activity suitable for you. You can also consult our plastic surgery team for cosmetic weight loss procedures that include liposuction, abdominoplasty, and body contouring. These are temporary ways and need to be complemented with lifestyle modifications. Medical problems like diabetes, blood pressure, heart disease, thyroid disorders, sleep apnoea, PCOD may occur.",
    },
    {
      question: "Morbidly Obese",
      answer:
        "You are MORBIDLY OBESE. You are grossly overweight and need radical steps to bring your weight under control. You also need a solution to your medical problems which will adversely impact your quality of life and shorten your lifespan. Nutrition and exercise alone cannot bring your weight down to desirable levels and you will gain your lost weight in no time. You are a candidate for BARIATRIC (Weight Loss) and METABOLIC SURGERY and should consider it at the earliest. With lifestyle modifications, Bariatric surgery will help you have sustained weight loss, helping you lose 60 to 80% of your excess weight. It also results in the resolution or significant improvement in your diabetes, hypertension, sleep apnoea, and joint problems. It’s time to take charge of your life.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50 px-4 sm:px-8 lg:px-16 w-full">
      <Heading title="BMI Calculator" />
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* BMI Form */}
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-11/12 lg:w-1/2">
          <h2 className="text-2xl font-bold text-primary_dark mb-6 text-center ">
            Calculate Your BMI
          </h2>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="block w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-[#e0ffff]"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => setGender(e.target.value)}
                className="form-radio focus:ring focus:ring-blue-300"
              />
              Female
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
                className="form-radio focus:ring focus:ring-blue-300"
              />
              Male
            </label>
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="block w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-[#e0ffff]"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="block w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-[#e0ffff]"
            />
          </div>
          <button
            onClick={calculateBMI}
            className="w-full bg-primary_dark text-white py-5 rounded-lg hover:bg-blue-700 transition"
          >
            Calculate BMI
          </button>
          {bmi && (
            <div className="mt-4 p-4 border rounded-lg bg-blue-100 text-primary_dark">
              <p>Your BMI is: {bmi.toFixed(1)}</p>
              <p>Category: {getBMICategory()}</p>
            </div>
          )}
        </div>

        {/* BMI Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-11/12 lg:w-1/3">
          <h2 className="text-2xl font-bold text-primary_dark mb-6">
            WHAT DOES YOUR BMI TELL YOU?
          </h2>
          <ul className="space-y-4">
            {bmiInfo.map((item, index) => (
              <li key={index} className="cursor-pointer">
                <div
                  className="flex items-center justify-between py-3 px-4 border-b"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="font-medium">{item.question}</span>
                  <span
                    className={`transform transition-all ${
                      isOpen === index ? "rotate-180" : ""
                    }`}
                    style={{ transition: "transform 0.5s ease" }}
                  >
                    &#8628; {/* Down Arrow */}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {isOpen === index && (
                    <div className="py-3 px-4 text-sm text-gray-700">
                      {item.answer}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
