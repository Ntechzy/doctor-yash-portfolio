import React from 'react';
import Heading from './Heading';
import { patientcare } from '@/data/PatientCare';

const Patient = () => {
    return (
        <div className='bg-[#16ab9725] pt-[100px] md:pt-[180px] py-[20px] md:pb-[100px] mb-5 flex flex-col  gap-8'>
            <div className='my-8 md:my-3'>

                <Heading
                    title={"Award winning patient care"} />

            </div>
            <div className='grid md:p-0 px-[10px]  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:max-w-[1350px] md:max-w-[720px] w-full m-auto gap-7 text-[16px] '>
                {
                    patientcare.map((pro, i) => (
                        <div key={i} className='w-full bg-white p-[30px] rounded-md gap-5 flex flex-col '>
                            <div className='flex gap-4 items-center'>
                                <div className="text-4xl">
                                    {React.cloneElement(pro.icon, { fill: '#16ab98', size: '3rem' })}
                                </div>
                                <div className='text-[1.3rem] text-black font-bold'>
                                    {pro.title}
                                </div>
                            </div>
                            <div className='mb-4'>
                                {pro.description}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Patient;
