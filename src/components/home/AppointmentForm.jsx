"use client"
import React, { useState } from 'react';

const AppointmentForm = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setAlert({ type: '', message: '' });

    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    if (!object["fullName"] || !object["appointmentDate"] || !object["gender"] || !object["phone"] || !object["address"]) {
      setLoading(false);
      setAlert({ type: 'error', message: 'Please fill all the required fields.' });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      if (result.success) {
        setAlert({ type: 'success', message: '✅ Thanks! Our team will reach you soon.' });
        event.target.reset(); 
      } else {
        setAlert({ type: 'error', message: '❌ Something went wrong. Please try again later.' });
      }

    } catch (error) {
      console.error(error);
      setAlert({ type: 'error', message: '⚠️ Network error. Please check your internet connection.' });
    }

    setLoading(false);
  }

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

        {/* Alert message */}
        {alert.message && (
          <div className={`p-3 mb-4 rounded-md text-sm ${alert.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {alert.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-[20px] grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-[1rem]">
            <input
              name="fullName"
              className="h-[55px] w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md"
              type="text"
              placeholder="Full Name"
            />
          </div>

          <div className="mb-[1rem]">
            <input
              name="appointmentDate"
              className="h-[55px] w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md"
              type="date"
              placeholder="Appointment Date"
            />
          </div>

          <div className="mb-[1rem]">
            <select name="gender" className="h-[55px] w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md">
              <option value="">Please Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-[1rem]">
            <input
              name="phone"
              className="h-[55px] w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md"
              type="tel"
              placeholder="Your Phone Number"
            />
          </div>

          <div className="mb-[1rem] col-span-full">
            <input
              name="address"
              className="h-[55px] w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md"
              type="text"
              placeholder="Your Address"
            />
          </div>

          <div className="mb-[1rem] col-span-full">
            <textarea
              name="message"
              className="w-full bg-[#f4f9fc] p-[.375rem_.75rem] rounded-md"
              rows={6}
              placeholder="Write a message"
            ></textarea>
          </div>

          <div className="flex w-full col-span-full">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#016163] hover:bg-[#016163b3] transition-all ease-[.35s] font-semibold uppercase text-sm py-[12px] text-white px-[32px] rounded-full w-full md:w-auto m-auto ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Sending...' : 'Make Appointment'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
