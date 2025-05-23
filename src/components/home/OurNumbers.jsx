import React from 'react'

const OurNumber = () => {
    const stats = [
        { value: "10", symbol: " K+", label: "Happy People" },
        { value: "10", symbol: " K+", label: "Surgery Completed" },
        { value: "8", symbol: " +", label: "Year of Experience" },
        // { value: "20", symbol: "", label: "Worldwide Branch" },
    ];

    return (
        <div className="bg-[#016263]  relative -bottom-[46px] md:-bottom-[100px] before:absolute before:w-full rounded-lg before:h-full overflow-hidden before:top-0 before:bg-[#016263] before:z-[20] bg-[url('/assets/bg-1.jpg')] text-white md:py-2 md:max-w-[1140px] sm:max-w-[720px] w-[95%] flex flex-col m-auto gap-7">
            <div className="container mx-auto  flex justify-around items-center md:gap-6 ">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="text-center flex flex-col items-center z-[999] p-[20px] md:p-[40px]"
                    >
                        <div>

                            <span className="md:text-4xl text-xl md:text-[70px] text-white font-bold">{stat.value}</span>
                            <span className='text-lg md:text-3xl'>{stat.symbol}</span>
                        </div>
                        <span className="text-[12px] md:text-base mt-2 font-normal md:font-bold">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurNumber

