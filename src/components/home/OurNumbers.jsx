import React from 'react'

const OurNumber = () => {
    const stats = [
        { value: "3", symbol: " K+", label: "Happy People" },
        { value: "1.5", symbol: " K+", label: "Surgery Completed" },
        { value: "4", symbol: " +", label: "Year of Experience" },
        // { value: "20", symbol: "", label: "Worldwide Branch" },
    ];

    return (
        <div className="bg-[#016263] relative -bottom-[100px] before:absolute before:w-full before:h-full overflow-hidden before:top-0 before:bg-[#016263] before:z-[20] bg-[url('/assets/bg-1.jpg')] text-white md:py-8 md:max-w-[1140px] sm:max-w-[720px] w-full flex flex-col  m-auto gap-7 ">
            <div className="container mx-auto flex justify-around items-center flex-wrap md:gap-6 ">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="text-center flex flex-col items-center z-[999] p-[20px] md:p-[40px]"
                    >
                        <div>

                            <span className="text-4xl md:text-[70px] text-white font-bold">{stat.value}</span>
                            <span className='text-xl md:text-3xl'>{stat.symbol}</span>
                        </div>
                        <span className="text-sm md:text-base mt-2">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurNumber

