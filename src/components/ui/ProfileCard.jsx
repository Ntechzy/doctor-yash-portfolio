import Image from "next/image";
import React from "react";

const ProfileCard = () => {
    const text = " DR. Yash Pandey * * DR. Yash Pandey";

    return (
        <section id="about" className="flex flex-col-reverse md:flex-row mt-10 justify-between px-4 sm:px-10 lg:px-10 gap-10 mb-5 rounded-sm">

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

            <div className="w-full md:w-[50%] flex flex-col gap-y-6 md:gap-y-14">

                <div>
                    <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-[600] leading-tight text-primary_dark">
                        DR. Yash Pandey
                    </h1>
                    <p className="text-secondary mt-4 md:mt-[25px] font-[600] text-[16px] sm:text-[18px] md:text-[20px] leading-7 md:leading-8 pr-0 md:pr-[5rem]">
                        MBBS, MS , DNB (Surgery), FNB (Minimal Access Surgery), FIAGES,
                        FALS Bariatric, MRCS ENGLAND, FACS USA
                    </p>
                </div>

                <div className="flex flex-col gap-y-4 text-secondary">
                    <h3 className="text-[14px] md:text-[15px] font-bold leading-[22px] md:leading-[26px] uppercase text-primary_dark">
                        Senior Consultant Surgeon
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Max Institute of GI, Bariatric, Laparoscopic and Robotic Surgery.
                        Max Super Speciality Hospital, Sector-10, Dwarka & BLK MAX Hospital,
                        Pusa Road Rajendra Place, New Delhi.
                    </p>
                    <p className="pt-3 md:pt-5 text-[14px] sm:text-[15px] md:text-[16px]">
                        Dr. Yash Pandey is a highly skilled Advanced Laparoscopic and
                        Bariatric Surgeon based in Delhi/NCR. He specializes in minimally
                        invasive surgical procedures (basic and advanced), Gastrointestinal
                        Surgery, and Bariatric Surgery.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;
