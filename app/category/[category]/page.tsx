"use client";
import HomeLayout from "@/app/homeLayout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import * as Tabs from "@radix-ui/react-tabs";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Footer } from "@/app/home/footer";
import { useAuthContext } from "@/app/(auth)/context";

const specialCategoryMapping: { [key: string]: string } = {
    'social-life': 'Social Life',
    'academic': 'Academia',
    // Add other special categories as needed
};

export default function Page() {
    const urlPath = usePathname();
    const categorySlug = urlPath.split("/")[2];


    const capitalizeCategoryName = (slug: string) => {
        if (!slug) return '';
        return slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();
    };

    const categoryName = capitalizeCategoryName(categorySlug);
    const { getCategoryData, categoryData } = useAuthContext();
    const [activeTab, setActiveTab] = useState("about");

    // Check if the categorySlug is special and map accordingly
    const actualCategoryName = specialCategoryMapping[categorySlug.toLowerCase()] || categoryName;


    useEffect(() => {
        getCategoryData(categoryName);
    }, [categoryName]);

    useEffect(() => {
        console.log(categoryData);
    }, [categoryData]);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    if (!categoryData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* <HomeLayout /> */}
            <div>
                <div className="w-full h-70 md:h-60 lg:h-60  bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 ">
                    <div className="px-10 md:px-40 lg:px-40 py-8">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href={`/category/${categorySlug}`}
                                        className="text-black capitalize"
                                    >
                                        {categorySlug}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="">
                            <h4 className="text-[2rem] font-semibold py-4 capitalize">
                                {categorySlug}
                            </h4>
                            <p>{categoryData?.description}</p>
                        </div>
                    </div>
                </div>

                <div className="pt-10 px-2 md:px-40 lg:px-40">
                    <Tabs.Root
                        defaultValue="about"
                        onValueChange={handleTabChange}
                        className="w-full"
                    >
                        <Tabs.List className=" sticky top-0 bg-white z-10 flex gap-4 md:gap-8 lg:gap-12 rounded-lg p-2 md:p-4 w-full">
                            <Tabs.Trigger
                                value="about"
                                className={classNames(
                                    "flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center rounded-lg",
                                    {
                                        "bg-blue-500 text-white": activeTab === "about",
                                        "bg-gray-100": activeTab !== "about",
                                    }
                                )}
                            >
                                About
                            </Tabs.Trigger>
                            <Tabs.Trigger
                                value="activity"
                                className={classNames(
                                    "flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center rounded-lg",
                                    {
                                        "bg-blue-500 text-white": activeTab === "activity",
                                        "bg-gray-100": activeTab !== "activity",
                                    }
                                )}
                            >
                                Activity
                            </Tabs.Trigger>
                            <Tabs.Trigger
                                value="career"
                                className={classNames(
                                    "flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center rounded-lg",
                                    {
                                        "bg-blue-500 text-white": activeTab === "career",
                                        "bg-gray-100": activeTab !== "career",
                                    }
                                )}
                            >
                                Career
                            </Tabs.Trigger>
                            <Tabs.Trigger
                                value="info"
                                className={classNames(
                                    "flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center rounded-lg",
                                    {
                                        "bg-blue-500 text-white": activeTab === "info",
                                        "bg-gray-100": activeTab !== "info",
                                    }
                                )}
                            >
                                More Info
                            </Tabs.Trigger>
                        </Tabs.List>

                        <Tabs.Content value="about" className="w-full">
                            <section className="p-4 md:p-6 bg-white">
                                <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">
                                    About
                                </h1>
                                <p className="text-sm md:text-base lg:text-lg">
                                    {categoryData.about}
                                </p>
                            </section>
                        </Tabs.Content>

                        <Tabs.Content value="activity" className="w-full">
                            <section className="p-4 md:p-6 bg-white">
                                <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">
                                    Activities
                                </h1>
                                <ul>
                                    {categoryData?.activity?.map((activity: any, index: number) => (
                                        <li key={index} className="my-2 text-sm md:text-base lg:text-lg">
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </Tabs.Content>

                        <Tabs.Content value="career" className="w-full">
                            <section className="p-4 md:p-6 bg-white">
                                <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">
                                    Career Recruiters
                                </h1>
                                <ul>
                                    {categoryData?.careerRecruiter?.map((recruiter: any, index: number) => (
                                        <li key={index} className="my-2 text-sm md:text-base lg:text-lg">
                                            {recruiter}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </Tabs.Content>

                        <Tabs.Content value="info" className="w-full">
                            <section className="p-4 md:p-6 bg-white">
                                <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">
                                    More Info
                                </h1>
                                <p className="text-sm md:text-base lg:text-lg">
                                    <strong>Education Requirements:</strong> {categoryData?.moreInfo?.educationRequirements}
                                </p>
                                <p className="text-sm md:text-base lg:text-lg">
                                    <strong>Certifications:</strong> {categoryData.moreInfo?.certifications?.join(", ")}
                                </p>
                                <p className="text-sm md:text-base lg:text-lg">
                                    <strong>Professional Associations:</strong> {categoryData.moreInfo?.professionalAssociations?.join(", ")}
                                </p>
                            </section>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
            </div>
            <Footer />
        </>
    );
}
