import { useState } from 'react';
// import Button from './Button';
import { SuccessStories } from '@/data/SliderData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = ({ interval = 5000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SuccessStories.length);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? SuccessStories.length - 1 : currentSlide - 1);
    };

    // useEffect(() => {
    //     const slideInterval = setInterval(nextSlide, interval);
    //     return () => clearInterval(slideInterval);
    // }, [currentSlide, interval]);

    return (
        <div className="relative w-full h-[50vh] overflow-hidden">
            <div className='flex  h-full  '>

                {SuccessStories.map((slide, index) => (
                    <div
                        key={index}
                        className={
                            `absolute group md:border-4 border-secondary w-full md:w-[50%] h-full transition-all duration-500 ease-in-out bg-cover bg-center delay-200 `}
                        style={{ backgroundImage: `url(${slide.image})`, transform: `translateX(${(index - currentSlide) * 100}%)`, objectFit: "cover" }}
                    >
                        <div
                            className={'flex flex-col gap-4 absolute justify-center font-bold  px-10 bottom-0 text-center items-center w-full h-full transition-all delay-200 ease-in-out opacity-0 group-hover:opacity-100 bg-[#00000040] text-white m-auto'}
                        >
                            <div>
                                {slide.title}
                            </div>
                            {/* <Button title={"Book Appoinment"} color={"bg-secondary"} hover={"hover:bg-primary"} /> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-5">
                <button
                    onClick={prevSlide}
                    className="absolute mx-4 p-4 rounded-lg bottom-2 shadow-xl shadow-[#D4AF37] right-[50%] text-3xl bg-white text-primary_dark"
                >
                    <FaArrowLeft />

                </button>
                <button
                    onClick={nextSlide}
                    className="absolute mx-4 p-4 rounded-lg bottom-2 shadow-xl shadow-[#D4AF37] left-[50%] text-3xl bg-white text-primary_dark"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Slider;
