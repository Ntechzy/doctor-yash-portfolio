import { SpecializationData } from '@/data/SpecializationData';
import React from 'react';

const Specialization = () => {
    return (
        <div className="flex flex-col items-center m-auto px-4 sm:px-8 lg:px-16 md:mb-[150px]  mt-[50px] ">
            <div className="mb-10">
                <h1 className="md:text-2xl text-xl sm:text-3xl rounded-lg shadow-md shadow-gray-200 md:py-[20px] md:px-[40px]  font-bold text-head_primary lg:text-[50px] leading-[54px] text-center">
                    DR. ARUN BHARDWAJ
                </h1>
                <h3 className="text-2xl sm:text-3xl py-5 md:py-[20px] px-[40px] text-[32px]  font-bold text-primary_dark  lg:text-[50px] leading-[54px] text-center">
                    SPECIALIZATION
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {SpecializationData.map((data, i) => (
                    <div
                        key={i}
                        className="flex flex-col overflow-hidden border-[1px] border-gray-300 p-4 sm:p-6 lg:p-8 gap-5 rounded-lg shadow-lg relative hover:shadow-md hover:before:w-full before:absolute before:h-1 before:transition-all before:duration-300 
                            before:w-0 before:left-0 before:bg-head_primary before:content-['_'] before:bottom-0"
                    >

                        <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center text-white text-2xl">
                            {data.icon}
                        </div>


                        <div className="w-full">
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary_dark leading-snug">
                                {data.title}
                            </h2>
                        </div>


                        <div className="text-primary_dark text-sm sm:text-base">
                            {data.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Specialization;
