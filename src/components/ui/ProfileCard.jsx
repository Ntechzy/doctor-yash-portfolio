import Image from "next/image";
import React from "react";

const ProfileCard = () => {
    const text = " DR. ARUN BHARDWAJ * * DR. ARUN BHARDWAJ";

    return (
        <div className="flex flex-col md:flex-row justify-between px-4 sm:px-10 lg:px-20 gap-10">

            <div className="w-full md:w-[45%] h-auto flex items-end justify-center">
                <div className="relative mt-10 h-[92%] md:mt-[70px] md:ml-[100px] md:w-full">
                    <img
                        src="/assets/doctor_img.jpg"
                        alt="Doctor Image"
                        layout="fill"
                        className="w-full h-full rounded-lg"
                    />
                    <div className="absolute -top-10 rounded-full right-1/2 transform translate-x-1/2 md:right-24 w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#f6f6f6]" />
                    <div className="absolute -top-16 rounded-full right-1/2 transform translate-x-1/2 md:right-[25px] w-[120px] h-[120px] md:w-[180px] md:h-[180px]">
                        {text.split("").map((char, i) => (
                            <span
                                key={i}
                                className="absolute top-16 transform origin-center text-black text-[10px] md:text-[12px] font-bold"
                                style={{
                                    transform: `rotate(${i * (360 / text.length)}deg) translate(50px) rotate(-${i * (360 / text.length)}deg)`,
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full md:w-[50%] flex flex-col gap-y-6 md:gap-y-14">

                <div>
                    <h1 className="text-[28px] md:text-[40px] lg:text-[50px] font-[600] leading-tight text-primary_dark">
                        DR. ARUN BHARDWAJ
                    </h1>
                    <p className="text-secondary mt-4 md:mt-[25px] font-[600] text-[16px] md:text-[18px] leading-7 md:leading-8 pr-0 md:pr-[5rem]">
                        MBBS, MS , DNB (Surgery), FNB (Minimal Access Surgery), FIAGES,
                        FALS Bariatric, MRCS ENGLAND, FACS USA
                    </p>
                </div>

                <div className="flex flex-col gap-y-4 text-secondary">
                    <h3 className="text-[14px] md:text-[15px] font-bold leading-[22px] md:leading-[26px] uppercase text-primary_dark">
                        Senior Consultant Surgeon
                    </h3>
                    <p className="text-[14px] md:text-[15px]">
                        Max Institute of GI, Bariatric, Laparoscopic and Robotic Surgery.
                        Max Super Speciality Hospital, Sector-10, Dwarka & BLK MAX Hospital,
                        Pusa Road Rajendra Place, New Delhi.
                    </p>
                    <p className="pt-3 md:pt-5 text-[14px] md:text-[15px]">
                        Dr. Arun Bhardwaj is a highly skilled Advanced Laparoscopic and
                        Bariatric Surgeon based in Delhi/NCR. He specializes in minimally
                        invasive surgical procedures (basic and advance), Gastrointestinal
                        Surgery, and Bariatric Surgery.
                    </p>
                </div>

                <p className="text-secondary text-[14px] md:text-[15px] leading-6 md:leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    deserunt dicta fugit dolores rem veritatis, officiis impedit magni
                    eligendi velit consequatur? Illum vel nisi laudantium inventore
                    doloremque maiores nemo? Facilis et debitis est, pariatur ipsa sit
                    natus molestiae eum asperiores fuga reprehenderit qui. Sequi eveniet
                    nesciunt laborum ut.
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
