'use client'
import React from 'react';
import CategoryCard from '../components/card';
import { categories } from '../constant/data';



export const PopularCareer: React.FC = () => {
    return (
        <div className='container mx-auto py-8'>
            <h1 className='text-3xl font-bold mb-8 '>Popular Career</h1>
            <div className='flex flex-wrap -m-4'>
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        href={category.href}
                        imgSrc={category.imgSrc}
                        title={category.title}
                        careersCount={category.careersCount}
                    />
                ))}
            </div>
        </div>
    );
};

