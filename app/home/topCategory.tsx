'use client'
import React from 'react';
import CategoryCard from '../components/card';
import { categories } from '../constant/data';



export const TopCareerCategory: React.FC = () => {
    return (
        <div className='bg-slate-200 py-16  '>
            <div className='container mx-auto '>
                <div className='flex justify-center'>
                    <div>
                        <div className='w-40 mx-auto'>
                            <h1 className='border-2 rounded-full bg-green-200 text-black p-2  text-center'>Guide Us</h1>
                        </div>


                        <h1 className='text-3xl font-bold mb-8 text-center py-2'>Top Categories of Career Option</h1>
                    </div>

                </div>

                <div className='flex flex-wrap -m-4'>
                    {categories.filter(c => c.top == true).map((category) => (
                        <CategoryCard
                            key={category.id}
                            href={`/category/${category.title.toLowerCase()}`}
                            imgSrc={category.imgSrc}
                            title={category.title}
                            careersCount={category.careersCount}
                            className="my-2 shadow-xxl"
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

