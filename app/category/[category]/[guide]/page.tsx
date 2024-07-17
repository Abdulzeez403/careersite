"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Page() {
    const urlPath = usePathname();
    const categoryname = urlPath.split('/')[2];
    return (
        <div>

            <div className="relative w-full h-60 bg-blue-500">
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
        </div>
    )
}
