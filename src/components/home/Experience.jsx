import React from 'react'
import ExperienceCard from '../ui/ExperienceCard'
import { ExperienceData } from '@/data/ExperienceData'

const Experience = () => {
    return (
        <div className='md:my-[50px] mt-20'>
            <div className='flex md:flex-row flex-col justify-between md:mx-8 gap-8'>

                <div className='md:w-[50%] flex flex-col gap-4 shadow-lg px-2 rounded-lg'>
                    <div>
                        <img className='rounded-lg' src="/assets/hospital.jpg" alt="" />
                    </div>
                    <div>
                        <h2 className='md:text-[20px] font-[400] leading-[30px] text-primary_dark'>Currently Available At</h2>
                        <h2 className='md:text-[20px] font-[400] leading-[30px] text-primary_dark'>Max Super speciality Hospital, Sector-10, Dwarka</h2>
                        <h2 className='md:text-[20px] font-[400] leading-[30px] text-primary_dark'>& BLK MAX hospital, Pusa road, Rajendra Place, New Delhi</h2>
                    </div>

                </div>

                <div className='grid gird-row-2 md:w-[50%] gap-5 p-1'>
                    <div className=' px-5 rounded-xl text-primary_dark gap-6 bg-[#d2f3ef] w-full'>
                        <h1 className='pt-4 md:text-[34px] text-[30px] md:font-semibold leading-[44px]'>
                            Senior Consultant
                        </h1>
                        <h2 className='text-[21px] font-semibold leading-[44px]'>
                            2024 - Present
                        </h2>
                        <p>
                            Max institute of GI, Bariatric, Laparoscopic and Robotic Surgery.
                        </p>
                        <p className=' text-[18px] font-[600] mt-12 pb-4'>
                            Max Super speciality Hospital, Sector-10, Dwarka
                            & BLK MAX hospital, Pusa road Rajendra Place, New Delhi
                        </p>
                    </div>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                        {
                            ExperienceData.map((obj, i) => (
                                <ExperienceCard key={i} data={obj} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
