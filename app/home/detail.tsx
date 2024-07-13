import React, { useState } from 'react'
import { HeroSection } from './herosection';
import { PopularCareer } from './popularCareer';


const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <PopularCareer />
        </div>
    )
}

export default HomePage;
