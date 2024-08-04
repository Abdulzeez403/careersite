"use client";
import React, { useEffect, useState } from "react";
import CategoryCard from "../components/card";
import { categories } from "../constant/data";

interface IProps {
    handleOpenModal: any;
    user: any
}
export const PopularCareer = ({ handleOpenModal, user }: IProps) => {
    const handleCardClick = () => {
        if (!user?.id) {
            handleOpenModal();
        } else {
            // Handle category click for logged-in users
            console.log(`Category clicked:`);
        }
    };


    return (
        <div className="bg-[#eeeded] py-8 ">
            <div className="container mx-auto ">
                <h1 className="text-3xl font-bold mb-8 ">Popular Career</h1>
                <div className="flex flex-wrap -m-4">
                    {categories.map((category) => (

                        <CategoryCard
                            key={category.id}
                            href={user?._id ? (`/category/${category.title.toLowerCase()}`) : ("#")}
                            imgSrc={category.imgSrc}
                            title={category.title}
                            className="my-2 shadow-xxl"
                            onClick={() => handleCardClick()}
                        />


                    ))}
                </div>
            </div>
        </div>
    );
};
