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
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';

export default function Page() {
  const urlPath = usePathname();
  const categoryname = urlPath.split("/")[2];
  const Subcategoryname = urlPath.split("/")[3];

  const [activeTab, setActiveTab] = useState("about");

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
                <BreadcrumbLink
                  href={`/category/${categoryname}`}
                  className="text-black capitalize"
                >
                  {categoryname}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/category/${categoryname}/${Subcategoryname}`}
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
                Academic counseling is a crucial support system designed to help
                students navigate their educational journey effectively. This
                guide provides an overview of the key areas where academic
                counseling can be beneficial and practical steps to make the
                most of these services.
              </p>
            </section>
          </Tabs.Content>

          <Tabs.Content value="eligibility" className="w-full">
            <section className="p-4 md:p-6 bg-white">
              <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">
                Activites
              </h1>
              <div>
                <p className="font-bold my-2 text-lg md:text-xl lg:text-2xl">
                  1. Setting Academic Goals
                </p>
                <p className=" md:text-base lg:text-lg">
                  Why It’s Important? Setting clear, achievable academic goals
                  can provide direction and motivation throughout your
                  educational journey.
                </p>
                <p className="font-bold my-2 md:text-lg lg:text-lg">
                  Steps to Set Goals
                </p>
                <p>
                  Identify Your Interests Reflect on subjects and activities you
                  enjoy and excel in. Short-Term vs. Long-Term Goals Define what
                  you want to achieve this semester (short-term) and by the end
                  of your academic program (long-term).
                </p>
                <p className="my-2">
                  SMART Goals: Ensure your goals are Specific, Measurable,
                  Achievable, Relevant, and Time-bound.
                </p>
                <span className="font-bold my-2 md:text-lg lg:text-lg">
                  Example
                </span>
                <p>
                  Short-Term Goal: Improve my math grade by one letter grade by
                  the end of the semester. Long-Term Goal: Graduate with honors
                  in computer science.
                </p>
              </div>
              <div>
                <p className="font-bold my-2 text-lg md:text-xl lg:text-2xl">
                  2. Time Management
                </p>
                <p className="md:text-base lg:text-lg">
                  {
                    " Why It’s Important: Effective time management helps balance academic responsibilities with personal life, reducing stress and improving performance."
                  }
                </p>
                <p className="font-bold my-2 md:text-lg lg:text-lg">
                  Strategies
                </p>
                <ul className="list-disc">
                  <li className="my-2">
                    Create a Schedule: Use a planner or digital calendar to
                    block out study times, classes, and extracurricular
                    activities.
                  </li>
                  <li>
                    Prioritize Tasks: Tackle assignments based on deadlines and
                    difficulty.
                  </li>
                  <li className="my-2">
                    Break Tasks into Chunks: Divide larger projects into
                    manageable pieces and set mini-deadlines.
                  </li>
                </ul>
                <p className="font-bold my-2 md:text-lg lg:text-lg">Tools</p>
                <ul className="list-disc">
                  <li className="my-2">
                    {"  Digital planners (Google Calendar, Microsoft Outlook)"}
                  </li>
                  <li>
                    Prioritize Tasks: Tackle assignments based on deadlines and
                    difficulty.
                  </li>
                  <li className="my-2">
                    {"  To-do list apps (Todo list, Trello)"}
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold my-2 text-lg md:text-xl lg:text-2xl">
                  3. Study Techniques
                </p>
                <p className="md:text-base lg:text-lg">
                  {
                    " Why It’s Important? Using the right study techniques can enhance understanding and retention of information."
                  }
                </p>
                <p className="font-bold my-2 md:text-lg lg:text-lg">
                  Techniques
                </p>
                <ul className="list-disc">
                  <li className="my-2">
                    Active Learning: Engage with the material through
                    discussions, teaching others, or applying concepts to
                    real-world scenarios.
                  </li>
                  <li>
                    Pomodoro Technique: Study for 25 minutes, then take a
                    5-minute break. Repeat and take a longer break after four
                    cycle
                  </li>
                  <li className="my-2">
                    Create visual representations of concepts to understand
                    relationships and hierarchies.
                  </li>
                </ul>

                <p className="font-bold my-2 md:text-lg lg:text-lg">
                  Resources
                </p>
                <ul className="list-disc">
                  <li className="my-2">
                    {"  Educational websites (Khan Academy, Coursera)"}
                  </li>
                  <li>Study groups or partners</li>
                </ul>
              </div>
              <div>
                <p className="font-bold my-2 text-lg md:text-xl lg:text-2xl">
                  4. Seeking Help
                </p>
                <p className="md:text-base lg:text-lg">
                  {
                    "   Why It’s Important: Knowing when and how to seek help can prevent minor issues from becoming major obstacles."
                  }
                </p>
                <p className="font-bold my-2 md:text-lg lg:text-lg">
                  Where to Seek Help
                </p>
                <ul className="list-disc">
                  <li className="my-2">
                    Academic Advisors Assist with course selection, career
                    advice, and academic planning.
                  </li>
                  <li>Tutoring Centers Provide help with specific subjects.</li>
                  <li className="my-2">
                    Professors and TAs: Offer insights and assistance during
                    office hours.
                  </li>
                  <li className="my-2">
                    Online Resources Forums (Reddit, Stack Exchange) and
                    educational platforms (edX, Udacity).
                  </li>
                </ul>
                -<p className="font-bold my-2 md:text-lg lg:text-lg">Tips</p>
                <ul className="list-disc">
                  <li>
                    Prepare specific questions or topics you need help with.
                  </li>
                  <li className="my-2">
                    {" Be proactive; don’t wait until you’re falling behind."}
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold my-2 text-lg md:text-xl lg:text-2xl">
                  5. Stress Management
                </p>
                <p className="md:text-base lg:text-lg">
                  {
                    " Why It’s Important: Managing stress is vital for maintaining mental and physical health, which in turn supports academic success."
                  }
                </p>
                <p className="font-bold my-2 md:text-lg lg:text-lg">
                  Techniques
                </p>
                <ul className="list-disc">
                  <li className="my-2">
                    Regular Exercise: Physical activity can reduce stress and
                    improve concentration.
                  </li>
                  <li>
                    Mindfulness and Meditation: Practices like deep breathing,
                    meditation, or yoga can help manage stress.
                  </li>
                  <li>
                    Healthy Lifestyle: Ensure adequate sleep, a balanced diet,
                    and time for hobbies and relaxation.
                  </li>
                </ul>
                <p className="font-bold my-2 md:text-lg lg:text-lg">
                  Resources
                </p>
                <ul className="list-disc">
                  <li>Meditation apps (Headspace, Calm)</li>
                  <li className="my-2">Campus wellness centers</li>
                  <li>
                    Support groups or counseling services5. Stress Management
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold my-2 text-lg md:text-xl lg:text-2xl">
                  6. Career Planning
                </p>
                <p className="md:text-base lg:text-lg">
                  {
                    " Why It’s Important: Aligning academic pursuits with career goals ensures a purposeful and rewarding educational journey."
                  }
                </p>
                <p className="font-bold my-2 md:text-lg lg:text-lg">Steps</p>
                <ul className="list-disc">
                  <li className="my-2">
                    Explore Career Options: Research various careers to
                    understand the required qualifications and job market.
                  </li>
                  <li>
                    Gain Experience: Internships, part-time jobs, and volunteer
                    work can provide practical experience.
                  </li>
                  <li>
                    Build a Network: Connect with professionals in your field
                    through networking events, social media, and informational
                    interviews.
                  </li>
                </ul>
                <p className="font-bold my-2 md:text-lg lg:text-lg">
                  Resources
                </p>
                <ul className="list-disc">
                  <li>Career services at your institution</li>
                  <li>Professional associations and organizations</li>
                  <li>LinkedIn and other networking platforms</li>
                </ul>
              </div>

              <div>
                <p className="font-bold md:text-base my-2 lg:text-lg">
                  Conclusion
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  Academic counseling is a valuable resource that can help you
                  achieve your educational and career goals. By setting clear
                  goals, managing your time effectively, utilizing the right
                  study techniques, seeking help when needed, managing stress,
                  and planning for your career, you can make the most of your
                  academic experience. Remember, success is a journey, and there
                  are numerous resources and people ready to support you along
                  the way.
                </p>
              </div>
            </section>
          </Tabs.Content>

          <Tabs.Content value="career" className="w-full">
            <section className="p-4 md:p-6 bg-white">
              <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">
                Career/Recruiters
              </h1>
              <p className="text-sm md:text-base lg:text-lg">
                Content about roles...
              </p>
            </section>
          </Tabs.Content>

          <Tabs.Content value="info" className="w-full">
            <section className="p-4 md:p-6 bg-white">
              <h1 className="font-semibold py-4 text-lg md:text-xl lg:text-2xl">
                More Info
              </h1>
              <p className="text-sm md:text-base lg:text-lg">
                Content about more info...
              </p>
            </section>
          </Tabs.Content>
        </Tabs.Root>
      </div>

      <Footer />
    </div>
  );
}
