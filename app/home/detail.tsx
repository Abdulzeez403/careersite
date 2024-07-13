import React, { useState } from 'react'
import { HeroSection } from './herosection';
import { PopularCareer } from './popularCareer';
import { TopCareerCategory } from './topCategory';
import { Footer } from './footer';
import { AboutUs } from './aboutUs';
import TestimonialsCarousel from './testimony';


const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <PopularCareer />
            <TopCareerCategory />
            <AboutUs />
            <TestimonialsCarousel />
            <Footer />
        </div>
    )
}

export default HomePage;
