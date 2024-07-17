"use client";
import HomeLayout from '@/app/homeLayout';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { categories } from '@/app/constant/data';
import CategoryCard from '@/app/components/card';

export default function Page() {
    const urlPath = usePathname();
    const categoryname = urlPath.split('/')[2];
    return (
        <div>
            <HomeLayout />

            <div className="text-gridient relative w-full h-60 ">
                <div className="px-20 py-8">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/components">Document</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="">
                        <h4 className="text-[2rem] font-semibold py-4">{categoryname}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere nesciunt .</p>
                    </div>
                </div>
            </div>

            <div className="relative px-4 lg:px-20">
                <div className="absolute -top-10 w-full flex flex-wrap">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            href={`/category/${categoryname}/${category?.title}`}
                            imgSrc={category.imgSrc}
                            title={category.title}
                            careersCount={category.careersCount}
                            className="bg-white"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
