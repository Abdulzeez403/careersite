import React from 'react';
import { Heart, Book } from 'lucide-react';
import Image from "next/image"
import about3 from "../../public/about.jpeg"


export const AboutUs = () => {
    return (
        <div className="bg-white py-36">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Image Section */}
                    <div className="">
                        <div className="">
                            <Image
                                src={about3}
                                alt="Education Images"
                                width={800}
                                height={600}
                                className="rounded-lg shadow-lg d-none d-md-block"
                            />
                        </div>
                    </div>

                    {/* About Description */}
                    <div className="md:w-1/2 md:pl-8">
                        <div className="text-start">
                            <span className="bg-pink-100 px-2 p-2 rounded-full">Know About Us</span>
                            <h2 className="text-3xl font-bold mt-4">Know Why Were Here to Counsel You</h2>
                        </div>

                        <p className="mt-6 text-justify text-gray-700">
                            When a student is standing on the verge of making a decision about their career, confusion and false guidance leave them in a dilemma. At this point, Guide Me Career brings a ray of hope that helps you to choose a perfect course from various options available to lead a successful career through a whole nine yards of information about each and every career option. We are here to represent more than 200 courses with an in-depth walkthrough of courses in which you can focus your interest in a specific field and target to achieve it as your main motto.
                        </p>

                        {/* Feature List */}
                        <div className="mt-10 space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-lg">
                                <div className="bg-pink-100 p-2 rounded-full">
                                    <Heart className="text-pink-500" />
                                </div>
                                <div>
                                    <h6 className="text-lg font-bold">A Partner to Guide You</h6>
                                    <p className="text-gray-700">We play a vital role in every student’s life when it comes to deciding on a particular field.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <Book className="text-blue-500" />
                                </div>
                                <div>
                                    <h6 className="text-lg font-bold">Select from a Wide Range of Colleges/Universities Curated Only for You</h6>
                                    <p className="text-gray-700">Our guide also helps students to opt for a perfect school, college, or university for them.</p>
                                </div>
                            </div>
                        </div>

                        {/* More About Us Button */}
                        {/* <div className="mt-10">
              <a className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 hover:from-purple-500 hover:to-blue-600" href="#">
                <span>More About Us</span>
                <i className="feather-arrow-right"></i>
              </a>
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};


