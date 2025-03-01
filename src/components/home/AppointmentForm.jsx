"use client"
import React, { useState } from 'react';

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  return (
    <section id="book-appointment" className="md:w-[90%] w-full flex md:flex-row flex-col py-[20px] md:py-[100px] items-start m-auto gap-1 md:gap-7">
      {/* Image Section */}
      <div className="relative w-full md:w-[60%] overflow-hidden md:p-0 p-[10px] bg-cover">
        <img 
          src="/assets/book.png" 
          alt="Appointment" 
          className="w-full h-[250px] md:h-[465px] rounded object-cover" 
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-[40%] px-[15px] flex flex-col leading-[1.6] mt-4 md:mt-0">
        <h1 className="text-[#016163] font-bold text-2xl md:text-[44px] pb-4">Book Appointment</h1>

        <form action="" className="mt-[20px] grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name Input */}
          <div className="mb-[1rem]">
            <input
              className="h-[55px] w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md"
              type="text"
              placeholder="Full Name"
            />
          </div>

          {/* Appointment Date Input */}
          <div className="mb-[1rem]">
            <input
              className="h-[55px] w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md"
              type="text"
              placeholder="Appointment Date"
            />
          </div>

          {/* Gender Selection */}
          <div className="mb-[1rem]">
            <select className="h-[55px] w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md" name="gender" id="gender">
              <option value="">Please Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Phone Number */}
          <div className="mb-[1rem]">
            <input
              className="h-[55px] w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md"
              type="tel"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Address Input */}
          <div className="mb-[1rem]">
            <input
              className="h-[55px] w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md"
              type="text"
              placeholder="Your Address"
            />
          </div>

          {/* Message Textarea */}
          <div className="mb-[1rem]">
            <textarea
              name=""
              className="w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md"
              rows={6}
              placeholder="Write a message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex w-full">
            <button className="bg-[#016163] hover:bg-[#016163b3] transition-all ease-[.35s] font-semibold uppercase text-sm py-[12px] text-white px-[32px] rounded-full w-full md:w-auto m-auto">
              Make Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
