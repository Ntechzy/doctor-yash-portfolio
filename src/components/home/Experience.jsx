import React from 'react'
import ExperienceCard from '../ui/ExperienceCard'
import { ExperienceData } from '@/data/ExperienceData'

const Experience = () => {
    return (
        <div className='md:my-[100px] mt-16'>
            <div className='flex md:flex-row flex-col justify-between md:mx-8 gap-8'>

                <div className='md:w-[50%] flex flex-col gap-4 shadow-lg px-2 rounded-lg'>
                    <div>
                        <img className='rounded-lg' src="/assets/hospital-banner.png" alt="" />
                    </div>
                    <div className=''>
                        <h2 className='md:text-[20px] font-[400] leading-[30px] text-primary_dark'>Currently Available At</h2>
                        <h2 className='md:text-[20px] font-[400] leading-[30px] text-primary_dark'>SAS Hospital , Harahua , Varanasi & Priya Hospital , Sigra , Varanasi </h2>
                        <h2 className='md:text-[20px] font-[400] leading-[30px] text-primary_dark pb-4'> </h2>
                    </div>

                </div>

                <div className='grid gird-row-2 md:w-[50%] gap-5 p-1'>
                    <div className=' px-5 rounded-xl text-primary_dark gap-6 bg-[#d2f3ef] w-full'>
                        <h1 className='pt-4 md:text-[34px] text-[30px] md:font-semibold leading-[44px]'>
                            Senior Consultant
                        </h1>
                        <h2 className='text-[21px] font-semibold leading-[44px]'>
                            2018 - Present
                        </h2>
                        <p>
                        Laparoscopic Bariatric & Metabolic Surgery from Center of Excellence for minimal access surgery Mumbai in 2018.
                        </p>
                        <p className=' text-[18px] font-[600] mt-8 pb-4'>
                        SAS Hospital , Harahua , Varanasi UttarPradesh & Priya Hospital , Sigra , Varanasi UttarPradesh
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
