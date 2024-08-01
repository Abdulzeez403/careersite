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
import React, { useState } from "react";
import classNames from "classnames";
import { Footer } from "@/app/home/footer";
import { careerData } from "@/app/constant/career";

// Type for the category data
type CategoryName = keyof typeof careerData;

export default function Page() {
    const urlPath = usePathname();
    const categoryname: CategoryName = urlPath.split("/")[2] as CategoryName;

    // Get data for the selected category
    const data = careerData[categoryname] || {
        About: "",
        Activity: [],
        CareerRecruiter: [],
        MoreInfo: {
            EducationRequirements: "",
            Certifications: [],
            ProfessionalAssociations: []
        }
    };

    const [activeTab, setActiveTab] = useState("about");

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <div>
            <HomeLayout />
            <div className="w-full h-60 bg-gradient-to-r from-slate-300 to-red-300">
                <div className="px-10 md:px-40 lg:px-40 py-8">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href={`/category/${categoryname}`}
                                    className="text-black capitalize"
                                >
                                    {categoryname}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="">
                        <h4 className="text-[2rem] font-semibold py-4 capitalize">
                            {categoryname}
                        </h4>
                        <p>Balancing Career Ambitions with Personal Wellness: A Guide to Healthy Success</p>
                    </div>
                </div>
            </div>

            <div className="pt-10 px-2 md:px-40 lg:px-40">
                <Tabs.Root
                    defaultValue="about"
                    onValueChange={handleTabChange}
                    className="w-full"
                >
                    <Tabs.List className="sticky top-0 bg-white z-10 flex gap-4 md:gap-8 lg:gap-12 rounded-lg p-2 md:p-4 w-full">
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
                            value="eligibility"
                            className={classNames(
                                "flex-1 px-4 py-2 text-base md:text-lg lg:text-xl text-center rounded-lg",
                                {
                                    "bg-blue-500 text-white": activeTab === "eligibility",
                                    "bg-gray-100": activeTab !== "eligibility",
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
                                    "bg-blue-500 text-white ": activeTab === "career",
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
                                {data.About}
                            </p>
                        </section>
                    </Tabs.Content>

                    <Tabs.Content value="eligibility" className="w-full">
                        <section className="p-4 md:p-6 bg-white">
                            <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">
                                Activities
                            </h1>
                            <ul>
                                {data.Activity.map((activity, index) => (
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
                                Career/Recruiters
                            </h1>
                            <ul>
                                {data.CareerRecruiter.map((recruiter: any, index: number) => (
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
                                <strong>Education Requirements:</strong> {data.MoreInfo.EducationRequirements}
                            </p>
                            <p className="text-sm md:text-base lg:text-lg">
                                <strong>Certifications:</strong> {data.MoreInfo.Certifications.join(", ")}
                            </p>
                            <p className="text-sm md:text-base lg:text-lg">
                                <strong>Professional Associations:</strong> {data.MoreInfo.ProfessionalAssociations.join(", ")}
                            </p>
                        </section>
                    </Tabs.Content>
                </Tabs.Root>
            </div>

            <Footer />
        </div>
    );
}
