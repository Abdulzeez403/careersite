"use client";
import HomeLayout from "@/app/homeLayout";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { categories } from "@/app/constant/data";
import CategoryCard from "@/app/components/card";
import { Footer } from "@/app/home/footer";

export default function Page() {
  const urlPath = usePathname();
  const categoryname = urlPath.split("/")[2];
  return (
    <div className="flex flex-col min-h-screen">
      <HomeLayout />
      <div className="flex-grow">
        <div className="bg-gradient-to-r from-slate-300 to-red-300 relative w-full h-60">
          <div className="pt-10 px-2 md:px-40 lg:px-40 py-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-black">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/category/${categoryname}`}
                    className="text-black"
                  >
                    {categoryname}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="">
              <h4 className="text-[2.2rem] font-semibold capitalize py-4">
                {categoryname}
              </h4>
            </div>
          </div>
        </div>

        <div className="relative pt-10 px-2 md:px-40 lg:px-40">
          <div className="flex flex-wrap">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                href={`/category/${categoryname}/${category?.title.toLowerCase()}`}
                imgSrc={category.imgSrc}
                title={category.title}
                className="bg-white"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
