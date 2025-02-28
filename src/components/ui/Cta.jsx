import Link from 'next/link'
import React from 'react'

const Cta = () => {
    return (
        <section id='/book-appointment' className='bg-[#16ab9725] my-8 md:my-32 md:pt-[80px] md:pb-[80px] mb-5 flex md:flex-row flex-col items-center md:justify-between md:px-20 md:gap-8 p-6'>
            <div className="text-center md:text-left">
                <h2 className="md:text-3xl font-bold border-b-2 text-primary_dark border-primary_dark pb-2">
                    Request an Appointment
                </h2>
             
                <p className="mt-4 text-lg text-gray-600 italic">
                    "Your health is your wealth. Let’s take the first step towards better well-being together."
                </p>
            </div>
            <div>
                <Link href="/book-appointment" className="mt-4 px-6 py-2 bg-primary_dark text-white rounded-md hover:bg-[#16ab97] md:text-3xl md:font-semibold transition duration-300">
                   Book Appointment
                </Link>
            </div>
        </section>
    )
}

export default Cta;
