import React, { useEffect, useRef, useState } from "react";
import Slider from "../ui/Slider";

const SucessStories = () => {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [animationTrigger, setAnimationTrigger] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsInView(true);
                    setAnimationTrigger(true);
                } else {
                    setIsInView(false);
                    setAnimationTrigger(false);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <div className='flex md:flex-row flex-col justify-around m-auto px-[15px] my-[80px]' >
            <div className='w-full md:w-[41.6%]  '>
                <div className=' '>
                    <div className='mb-[40px]'>
                        <div className='flex items-center gap-4'>
                            <h1 className='text-[9px] md:text-[12px] font-bold uppercase mb-2 md:mb-[20px] text-primary_dark '>
                                Success Stories
                            </h1>
                            <img className='mb-[20px]' src="/props/divider.png" alt="" />
                        </div>

                        <h1 className='text-[24px] md:text-[42px] font-[700] text-primary_dark leading-[1.25em]'>
                            Dedication and Expertise. Transforming lives through medical excellence.
                        </h1>
                    </div>

                    <div>

                        <p className='text-[15px] md:text-[16px] text-gray-500 md:mt-0 -mt-3 mb-[50px]'>
                            Success lies in two things: Strategy and Execution. Without both, the results just won't show up where you need them.
                        </p>
                    </div>


                </div>
            </div>
            <div className='flex w-full md:w-[50%] '>

                <Slider />
            </div>
        </div>
    )
}

export default SucessStories
