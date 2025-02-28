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
      <div className="relative w-full md:w-[90%] overflow-hidden md:p-0 p-[10px] bg-cover">
        <img src="/assets/book.png" alt="Appointment" className="w-[70%] m-auto md:h-[465px] rounded h-[250px] bg-black" />
      </div>
      <div className="w-full md:w-1/2 px-[15px] flex flex-col leading-[1.6] mt-1 md:md:p-0 p-[24px]">
        <h1 className="text-[#016163] font-bold text-2xl md:text-[44px] pb-4">Book Appointment</h1>

        <form action="" className="mt-[20px] grid grid-cols-2 gap-3">

          <div className="mb-[1rem] flex flex-col md:flex-row justify-between gap-3">
            <input
              className="h-[55px] w-full md:w-[100%] bg-[#f4f9fc] p-[.375rem_.75rem]"
              type="text"
              placeholder="Full Name"
            />
          
          </div>

     
          <div className="mb-[1rem] flex flex-col md:flex-row justify-between gap-3">
        
            <input
              className="h-[55px] w-full md:w-[100%] bg-[#f4f9fc] p-[.375rem_.75rem]"
              type="text"
              placeholder="Appointment Date"
            />
          </div>

      
          <div className="mb-[1rem] flex flex-col md:flex-row justify-between gap-3">
            <select className="h-[55px] w-full md:w-[100%] bg-[#f4f9fc] p-[.375rem_.75rem]" name="gender" id="gender">
              <option value="">Please Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Phone Number */}
          <div className="mb-[1rem] flex flex-col md:flex-row justify-between gap-3">
            <input
              className="h-[55px] w-full md:w-[100%] bg-[#f4f9fc] p-[.375rem_.75rem]"
              type="tel"
              placeholder="Your Phone Number "
            />
          </div>

          {/* Address */}
          <div className="mb-[1rem] flex flex-col">
            <input
              className="h-[55px] w-full md:w-[100%] bg-[#f4f9fc] p-[.375rem_.75rem]"
              type="text"
              placeholder="Your Address"
            />
          </div>

    

          
         

          {/* Message */}
          <div>
            <textarea
              name=""
              className="mb-4 w-full bg-[#f4f9fc] p-[.375rem_.75rem]"
              rows={6}
              placeholder="Write a message"
              id=""
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex w-full m-auto">
            <button className="bg-[#016163] hover:bg-[#016163b3] hover:bg-rose transition-[all_ease_.35s] font-semibold uppercase text-sm py-[12px] text-white px-[32px] rounded-full m-auto">
              Make Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
