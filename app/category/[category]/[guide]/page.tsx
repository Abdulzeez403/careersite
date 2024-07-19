"use client"
import HomeLayout from '@/app/homeLayout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import * as Tabs from '@radix-ui/react-tabs';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import classNames from 'classnames';
import { Footer } from '@/app/home/footer';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';

export default function Page() {
    const urlPath = usePathname();
    const categoryname = urlPath.split('/')[2];
    const Subcategoryname = urlPath.split('/')[3];

    const [activeTab, setActiveTab] = useState('about');

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };
    return (
        <div>
            <HomeLayout />
            <div className=" w-full h-60 bg-gradient-to-r from-slate-300 to-red-300  ">
                <div className="px-10 md:px-40  lg:px-40 py-8">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/category/${categoryname}`} className='text-black'>{categoryname}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/category/${categoryname}/${Subcategoryname}`} className='text-black'>{categoryname}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>

                    </Breadcrumb>

                    <div className="">
                        <h4 className="text-[2rem] font-semibold py-4">{categoryname}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere nesciunt .</p>
                    </div>
                </div>
            </div>

            <div className="pt-10 px-2 md:px-40  lg:px-40">
                {/* 
                <Tabs defaultValue="about" className="w-full" onValueChange={handleTabChange}>
                    <TabsList className=" sticky top-0 bg-white z-10 gap-4 md:gap-8 lg:gap-12 rounded-lg p-2 md:p-4 w-full">
                        <TabsTrigger
                            value="about"
                            className={classNames('flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center', {
                                'bg-blue-500 text-white rounded-lg': activeTab === 'about',
                                'bg-gray-100': activeTab !== 'about',
                            })}
                        >
                            About
                        </TabsTrigger>
                        <TabsTrigger
                            value="eligibility"
                            className={classNames('flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center', {
                                'bg-blue-500 text-white rounded-lg': activeTab === 'eligibility',
                                'bg-gray-100': activeTab !== 'eligibility',
                            })}
                        >
                            Eligibility
                        </TabsTrigger>
                        <TabsTrigger
                            value="career"
                            className={classNames('flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center', {
                                'bg-blue-500 text-white rounded-lg': activeTab === 'career',
                                'bg-gray-100': activeTab !== 'career',
                            })}
                        >
                            Career
                        </TabsTrigger>
                        <TabsTrigger
                            value="info"
                            className={classNames('flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center', {
                                'bg-blue-500 text-white rounded-lg': activeTab === 'info',
                                'bg-gray-100': activeTab !== 'info',
                            })}
                        >
                            More Info
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="about" id="overview" className="w-full">
                        <section className="p-4 md:p-6 bg-white">
                            <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">About</h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                A viticulturist is a specialised agricultural scientist or expert who focuses on the cultivation and management of grapevines. Their main role involves overseeing the entire grape-growing process from planting and cultivating the vines to harvesting the grapes for wine production. These experts possess in-depth knowledge of vineyard management, grape physiology, soil health, pest control and climatic conditions that affect grape growth.
                                One crucial aspect of a viticulturists job is selecting the right grape varieties suitable for the specific regions climate, soil composition and altitude. They evaluate various factors to determine the optimal grape varieties that will thrive and produce high-quality grapes. This decision is vital as it influences the flavour, aroma and overall quality of the resulting wine.
                                Viticulturists play a critical role in maintaining the health of the grapevines and preventing diseases and pests. They develop and implement integrated pest management strategies to safeguard the vineyards health and productivity sustainably. This may involve utilising environmentally friendly practices to minimise the use of chemicals and promote organic farming techniques.
                            </p>
                        </section>
                    </TabsContent>
                    <TabsContent value="eligibility" id="Eligibility" className="w-full">
                        <section className="p-4 md:p-6 bg-white">
                            <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">Eligibility</h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Content about eligibility...
                            </p>
                        </section>
                    </TabsContent>
                    <TabsContent value="career" id="Roles">
                        <section className="p-4 md:p-6 bg-white">
                            <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">Career/Recruiters</h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Content about roles...
                            </p>
                        </section>
                    </TabsContent>
                    <TabsContent value="info" id="Salary">
                        <section className="p-4 md:p-6 bg-white">
                            <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">More Info</h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Content about more info...
                            </p>
                        </section>
                    </TabsContent>
                </Tabs> */}

                <Tabs.Root defaultValue="about" onValueChange={handleTabChange} className="w-full">
                    <Tabs.List className="sticky top-0 bg-white z-10 flex gap-4 md:gap-8 lg:gap-12 rounded-lg p-2 md:p-4 w-full">
                        <Tabs.Trigger
                            value="about"
                            className={classNames('flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center rounded-lg', {
                                'bg-blue-500 text-white': activeTab === 'about',
                                'bg-gray-100': activeTab !== 'about',
                            })}
                        >
                            About
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="eligibility"
                            className={classNames('flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center rounded-lg', {
                                'bg-blue-500 text-white': activeTab === 'eligibility',
                                'bg-gray-100': activeTab !== 'eligibility',
                            })}
                        >
                            Eligibility
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="career"
                            className={classNames('flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center rounded-lg', {
                                'bg-blue-500 text-white ': activeTab === 'career',
                                'bg-gray-100': activeTab !== 'career',
                            })}
                        >
                            Career
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="info"
                            className={classNames('flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center rounded-lg', {
                                'bg-blue-500 text-white': activeTab === 'info',
                                'bg-gray-100': activeTab !== 'info',
                            })}
                        >
                            More Info
                        </Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content value="about" className="w-full">
                        <section className="p-4 md:p-6 bg-white">
                            <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">About</h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                A viticulturist is a specialised agricultural scientist or expert who focuses on the cultivation and management of grapevines. Their main role involves overseeing the entire grape-growing process from planting and cultivating the vines to harvesting the grapes for wine production. These experts possess in-depth knowledge of vineyard management, grape physiology, soil health, pest control and climatic conditions that affect grape growth.
                                One crucial aspect of a viticulturists job is selecting the right grape varieties suitable for the specific regions climate, soil composition and altitude. They evaluate various factors to determine the optimal grape varieties that will thrive and produce high-quality grapes. This decision is vital as it influences the flavour, aroma and overall quality of the resulting wine.
                                Viticulturists play a critical role in maintaining the health of the grapevines and preventing diseases and pests. They develop and implement integrated pest management strategies to safeguard the vineyards health and productivity sustainably. This may involve utilising environmentally friendly practices to minimise the use of chemicals and promote organic farming techniques.
                            </p>
                        </section>
                    </Tabs.Content>

                    <Tabs.Content value="eligibility" className="w-full">
                        <section className="p-4 md:p-6 bg-white">
                            <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">Eligibility</h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Content about eligibility...
                            </p>
                        </section>
                    </Tabs.Content>

                    <Tabs.Content value="career" className="w-full">
                        <section className="p-4 md:p-6 bg-white">
                            <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">Career/Recruiters</h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Content about roles...
                            </p>
                        </section>
                    </Tabs.Content>

                    <Tabs.Content value="info" className="w-full">
                        <section className="p-4 md:p-6 bg-white">
                            <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">More Info</h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Content about more info...
                            </p>
                        </section>
                    </Tabs.Content>
                </Tabs.Root>

            </div>

            <Footer />
        </div>
    )
}
