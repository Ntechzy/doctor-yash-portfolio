import React, { useState } from "react";
import Heading from "./Heading";

export default function BMICalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

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

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-100 px-4 sm:px-8 lg:px-16 w-full">
      <Heading title="BMI Calculator" />
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* BMI Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-11/12 lg:w-1/2">
          <h2 className="text-2xl font-bold text-primary_dark mb-6 text-center">
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
            <li className="flex items-center justify-between border-b pb-2 p-4 sm:p-6">
              <span className="font-medium">01. BMI &lt; 18.5</span>
              <span className="text-gray-500">Underweight</span>
            </li>
            <li className="flex items-center justify-between border-b pb-2 p-4 sm:p-6">
              <span className="font-medium">02. 18.5 - 23.5</span>
              <span className="text-gray-500">Normal</span>
            </li>
            <li className="flex items-center justify-between border-b pb-2 p-4 sm:p-6">
              <span className="font-medium">03. 23.6 - 27.5</span>
              <span className="text-gray-500">Overweight</span>
            </li>
            <li className="flex items-center justify-between p-4 sm:p-6">
              <span className="font-medium">04. BMI &gt; 27.5</span>
              <span className="text-gray-500">Obese</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
