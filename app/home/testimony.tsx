// components/TestimonialsCarousel.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/card/testimonyCard';

interface Testimonial {
    id: number;
    description: string;
    clientImage: string;
    clientName: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        description: "I’m a student at the University of Lagos, studying Computer Science. With so many universities and courses available in Nigeria, I was overwhelmed and unsure which program would best suit my career goals. Guide Me Career helped me navigate these options and provided valuable advice on selecting the right course and institution. Their support was instrumental in helping me choose the best path for a successful future.",
        clientImage: "/s1.jpeg",
        clientName: "Abdulaganiu",
    },
    {
        id: 2,
        description: "As an aspiring entrepreneur from Ahmadu Bello University, I was unsure about which business program would best align with my goals in Nigeria's competitive market. Guide Me Career's expert guidance and personalized recommendations allowed me to identify the perfect course and institution that matched my ambitions. Their assistance has been crucial in setting me up for success in my entrepreneurial journey",
        clientImage: "/s2.jpeg",
        clientName: "Isiaq",

    },
    {
        id: 3,
        description: "I’m a student at the University of Lagos, studying Computer Science. With so many universities and courses available in Nigeria, I was overwhelmed and unsure which program would best suit my career goals. Guide Me Career helped me navigate these options and provided valuable advice on selecting the right course and institution. Their support was instrumental in helping me choose the best path for a successful future.",
        clientImage: "/s3.jpeg",
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
