import React, { useState } from 'react'
import { HeroSection } from './herosection';
import { PopularCareer } from './popularCareer';
import { TopCareerCategory } from './topCategory';
import { Footer } from './footer';
import { AboutUs } from './aboutUs';
import TestimonialsCarousel from './testimony';


interface IProps {
    handleOpenModal?: () => void;
}

const HomePage = ({ handleOpenModal }: IProps) => {
    return (
        <div>
            <HeroSection handleOpenModal={handleOpenModal} />
            <PopularCareer />
            <TopCareerCategory />
            <AboutUs />
            <TestimonialsCarousel />
            <Footer />
        </div>
    )
}

export default HomePage;
