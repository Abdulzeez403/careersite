'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import heroImage from '../../public/image2.png';

export const HeroSection: React.FC = () => {
    return (
        <div className="relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-20 flex flex-col lg:flex-row items-center justify-center ">

            <div className="lg:flex-1 px-4 lg:px-20 lg:mr-8 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">Aiming for Knowledge to Kickstart Your Career</h1>
                <p className="mt-4 text-lg sm:text-xl text-white">We are thrilled to provide you the real-world knowledge and guide you through a variety of career options.</p>
                <Button className="mt-8 px-6 py-3 rounded-full bg-white text-customPrimary font-semibold">
                    Get Started
                </Button>
            </div>
            <div className="lg:flex-1 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                <Image src={heroImage} alt="Hero Image" width={700} height={700} className="max-w-full h-auto" />
            </div>
            <div className="custom-shape-divider-bottom-1720832713">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
};

