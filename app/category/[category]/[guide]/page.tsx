"use client"
import HomeLayout from '@/app/homeLayout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import classNames from 'classnames';

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
                <div className="px-40 py-8">
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

            <div className="pt-10 px-40">

                <Tabs defaultValue="about" className="" onValueChange={handleTabChange}>
                    <TabsList className="sticky top-0 bg-white z-10 gap-x-40 rounded-lg">
                        <TabsTrigger value="about"
                            className={classNames('px-4  text-[1.5rem]', {
                                'bg-blue-500 text-white': activeTab === 'about',
                                '': activeTab !== 'about',
                            })}
                        >About</TabsTrigger>


                        <TabsTrigger value="eligibility"
                            className={classNames('px-4  text-[1.5rem]', {
                                'bg-blue-500 text-white': activeTab === 'eligibility',
                                '': activeTab !== 'eligibility',
                            })}
                        >Eligibility</TabsTrigger>



                        <TabsTrigger value="career"

                            className={classNames('px-4  text-[1.5rem]', {
                                'bg-blue-500 text-white': activeTab === 'career',
                                '': activeTab !== 'career',
                            })}
                        >Career/Recruiters</TabsTrigger>


                        <TabsTrigger value="info"
                            className={classNames('px-4  text-[1.5rem]', {
                                'bg-blue-500 text-white': activeTab === 'info',
                                '': activeTab !== 'info',
                            })}
                        >More Info</TabsTrigger>
                    </TabsList>


                    <TabsContent value="about" id="overview">
                        <section className="p-4 mb-2 bg-white">
                            <h1 className="font-semibold py-4 text-lg">About</h1>
                            <p>A viticulturist is a specialised agricultural scientist or expert who focuses on the cultivation and management of grapevines. Their main role involves overseeing the entire grape-growing process from planting and cultivating the vines to harvesting the grapes for wine production. These experts possess in-depth knowledge of vineyard management, grape physiology, soil health, pest control and climatic conditions that affect grape growth.

                                One crucial aspect of a viticulturists job is selecting the right grape varieties suitable for the specific regions climate, soil composition and altitude. They evaluate various factors to determine the optimal grape varieties that will thrive and produce high-quality grapes. This decision is vital as it influences the flavour, aroma and overall quality of the resulting wine.

                                Viticulturists play a critical role in maintaining the health of the grapevines and preventing diseases and pests. They develop and implement integrated pest management strategies to safeguard the vineyards health and productivity sustainably. This may involve utilising environmentally friendly practices to minimise the use of chemicals and promote organic farming techniques</p>
                        </section>
                    </TabsContent>
                    <TabsContent value="eligibility" id="Eligibility">
                        <section className="mt-20">
                            <h1>Eligibility</h1>
                            <p>Content about eligibility...</p>
                        </section>
                    </TabsContent>
                    <TabsContent value="career" id="Roles">
                        <section className="mt-20">
                            <h1>Career/Recruiters</h1>
                            <p>Content about roles...</p>
                        </section>
                    </TabsContent>
                    <TabsContent value="info" id="Salary">
                        <section className="mt-20">
                            <h1>More Info</h1>
                            <p>Content about more info...</p>
                        </section>
                    </TabsContent>
                </Tabs>

            </div>

        </div>
    )
}
