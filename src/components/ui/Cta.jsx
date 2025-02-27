import React from 'react'

const Cta = () => {
    return (
        <div className='bg-[#16ab9725] my-8 md:my-32 md:pt-[80px] md:pb-[80px] mb-5 flex md:flex-row flex-col items-center  md:justify-between md:px-20 md:gap-8 p-6'>
            <h2 className=' md:text-3xl font-bold text-'>
                Request an Appointment
            </h2>
            <div>
                <button className="mt-4 px-6 py-2 bg-primary_dark text-white rounded-md hover:bg-blue-800">
                    View All Reviews on Google
                </button>
            </div>
        </div>
    )
}

export default Cta