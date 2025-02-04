import React from 'react'

const Cta = () => {
    return (
        <div className='bg-[#16ab9725] my-20 pt-[80px] pb-[80px] mb-5 flex md:flex-row flex-col justify-between px-20  gap-8'>
            <h2 className=' text-3xl font-bold text-'>
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