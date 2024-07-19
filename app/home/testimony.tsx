// components/TestimonialsCarousel.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/card/testimonyCard';

interface Testimonial {
    id: number;
    iconSrc: string;
    description: string;
    clientImage: string;
    clientName: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        iconSrc: "/assets/images/icons/facebook.png",
        description: "I’m a law student from National Law School of India University, Banglore. I wanted to get admission in university to get the best skills and education, but I was confused with so many options available, but Guide Me Career helped me to get the best course and university in the line of education which could make me successful ahead.",
        clientImage: "/aboutus1.png",
        clientName: "Vicky",
    },
    {
        id: 2,
        iconSrc: "/assets/images/icons/facebook.png",
        description: "I’m a law student from National Law School of India University, Banglore. I wanted to get admission in university to get the best skills and education, but I was confused with so many options available, but Guide Me Career helped me to get the best course and university in the line of education which could make me successful ahead.",
        clientImage: "/aboutus2.png",
        clientName: "Vicky",

    },
    {
        id: 3,
        iconSrc: "/assets/images/icons/facebook.png",
        description: "I’m a law student from National Law School of India University, Banglore. I wanted to get admission in university to get the best skills and education, but I was confused with so many options available, but Guide Me Career helped me to get the best course and university in the line of education which could make me successful ahead.",
        clientImage: "/aboutus3.png",
        clientName: "Vicky"
    },
    // Add more testimonials as needed
];

const TestimonialsCarousel: React.FC = () => {
    return (
        <div className='my-4  py-4'>
            <div className='flex justify-center'>
                <div>
                    <div className='w-60 mx-auto'>
                        <h1 className='border-2 rounded-full bg-slate-200 text-blue-600 p-2  text-center'>EDUCATION FOR EVERYONE</h1>
                    </div>
                    <h1 className='text-3xl font-bold mb-8 text-center py-2'>Success in your Career is
                        Assured & Here is the Proof!</h1>
                </div>

            </div>


            <div className="relative w-full h-full overflow-hidden">
                <motion.div
                    className=" flex gap-4 sm:gap-8 lg:gap-12"
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="min-w-[75vw] sm:min-w-[50vw] lg:min-w-[25vw]">
                            <TestimonialCard
                                iconSrc={testimonial.iconSrc}
                                description={testimonial.description}
                                clientImage={testimonial.clientImage}
                                clientName={testimonial.clientName}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

        </div>

    );
};

export default TestimonialsCarousel;
