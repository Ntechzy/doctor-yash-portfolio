import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  const text = " DR. Yash Pandey * * DR. Yash Pandey";

  return (
    <section
      id="about"
      className="flex flex-col-reverse md:flex-row mt-10 justify-between px-4 sm:px-10 lg:px-10 gap-10 mb-5 rounded-sm"
    >
      <div className="w-full md:w-[45%] h-auto flex items-end justify-center">
        <div className=" h-[92%]  md:w-full">
          <img
            src="/assets/doctor_img.jpg"
            alt="Doctor Image"
            layout="fill"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>

      <div className="w-full md:w-[60%] flex flex-col gap-y-6 md:gap-y-14">
        <div>
          <h1 className="text-[28px] sm:text-[32px] md:text-[40px] md:mt-[25px] lg:text-[50px] font-[600] leading-tight text-primary_dark">
            DR. Yash Pandey
          </h1>
          <p className="text-secondary mt-4 md:mt-[15px] font-[600] text-[16px] sm:text-[18px] md:text-[20px]  pr-0 md:pr-[5rem]">
            MBBS From Era’s Lucknow Medical college, Ram MAnohar Lohiya Avadh
            University in 2014
            <br /> M.S. From Krishna Institute of Medical Sciences Deemed University
            in 2017.
          </p>
        </div>

        <div className="flex flex-col gap-y-2 text-secondary">
          <h3 className="text-[14px] md:text-[20px] font-bold leading-[22px]  uppercase text-primary_dark">
            Specialization & Experience
          </h3>
          {/* <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <b className="text-lg">Specialization - </b> General Surgery
          </p> */}
          <p className=" text-[14px] font-medium sm:text-[15px] md:text-[16px]">
            Laparoscopic Bariatric & Metabolic Surgery from Center of Excellence
            for minimal access surgery Mumbai in 2018.
            <br />Experience – More than 8 Yrs. • Specialization- General
            Surgery
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
