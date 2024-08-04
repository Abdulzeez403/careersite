import React, { useEffect, useState } from 'react'
import { HeroSection } from './herosection';
import { PopularCareer } from './popularCareer';
import { TopCareerCategory } from './topCategory';
import { Footer } from './footer';
import { AboutUs } from './aboutUs';
import TestimonialsCarousel from './testimony';
import Cookies from 'universal-cookie';
import { useAuthContext } from '../(auth)/context';


interface IProps {
    handleOpenModal?: () => void;
}

const HomePage = ({ handleOpenModal }: IProps) => {

    const { currentUser, user, } = useAuthContext();

    const cookies = new Cookies();
    let userCookie = cookies.get("user");

    useEffect(() => {

        if (userCookie && userCookie.id) {
            currentUser(userCookie.id);
        } else {
            console.error("User cookie not found or malformed");
        }
    }, []);


    return (
        <div>
            <HeroSection handleOpenModal={handleOpenModal} />
            <PopularCareer handleOpenModal={handleOpenModal} user={user} />
            <TopCareerCategory handleOpenModal={handleOpenModal} user={user} />
            <AboutUs />
            <TestimonialsCarousel />
            <Footer />
        </div>
    )
}

export default HomePage;
