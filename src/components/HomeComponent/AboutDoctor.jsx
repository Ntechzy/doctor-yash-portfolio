import React from 'react';
import { FaHeartbeat, FaUserMd } from 'react-icons/fa'; // Import React Icons

const AboutDoctor = () => {
  return (
    <div className='flex w-[85%] m-auto -mt-11 z-[999] bg-orange-50 items-center gap-20'>
      {/* Image */}
      <div className='w-[50%] h-[70%] bg-orange-50 p-6'>
        <img
          src="https://media.istockphoto.com/id/1960165976/photo/old-healthcare-worker-in-clinic.jpg?s=2048x2048&w=is&k=20&c=SS5Q9MWXzL7tedzATBKaZgPDv_G4eLXMxGChwfN1cl4="
          alt="Doctor"
          className='h-[550px] pt-11'
        />
      </div>
      
      {/* Doctor's Information */}
      <div>
        {/* Section 1 */}
        <div className='bg-orange-50 z-[999] -mt-36'>
          <h2 className='text-lg font-semibold tracking-[2px] text-orange-400 p-1 mt-[150px]'>About the doctor</h2>
          <h1 className='text-3xl font-bold p-1'>Dr Yash</h1>
          <h2 className='font-semibold text-xl tracking-[1px]'>Surgeon Specialist</h2>
        </div>

        {/* Section 2 */}
        <div>
          <div className='flex flex-row gap-20 mt-9'>
            {/* Interventional Cardiologist */}
            <div className='flex items-start gap-2 flex-col '>
              <div className='border-2 border-gray-100 rounded-lg p-4 bg-white '><FaHeartbeat size={50} color="#e67e22 " /></div>
              <div>
                <h2 className='font-semibold text-lg mt-6'>INTERVENTIONAL <br /> CARDIOLOGIST / HEART <br />CARE SERVICES</h2>
              </div>
            </div>

            {/* Doctor's Qualifications */}
            <div className='flex items-start gap-2 flex-col'>
            <div className='border-2 border-gray-100 rounded-lg p-4 flex  bg-white '> <FaUserMd size={50} color="#e67e22" /> </div>
              <div>
                <h2 className='font-[500] text-lg mt-6'>MBBS, MD - General <br /> Medicine, DM - Cardiology | <br /> 21 YRS OF EXPERIENCE</h2>
              </div>
            </div>
          </div>

          {/* Doctor's Quote */}
          <div className='font-bold text-xl w-[70%] mt-4'>
            “Intricate interventional cardiology to pioneering preventive heart care, sculpting a healthier tomorrow.”
          </div>
        </div>
        {/*button  */}
        <button className='text-white font-semibold p-3 rounded-lg mt-3 bg-orange-600'>Get Appointment</button>
      </div>
    </div>
  );
};

export default AboutDoctor;
