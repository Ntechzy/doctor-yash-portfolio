import React from 'react'

const ExperienceCard = ({ data }) => {
    return (
        <div>
            <div className='flex flex-col gap-2 p-4 rounded-xl shadow-md text-primary_dark h-full'>
                <h4 className=' text-[26px] font-semibold '>
                    {data.title}
                </h4>
                <h5 className=' text-[18px] font-semibold  '>
                    {data.subtitle}
                </h5>
                <p className=' text-[16px] pt-[20px] ' >
                    {data.desc}
                </p>
            </div>

        </div>
    )
}

export default ExperienceCard
