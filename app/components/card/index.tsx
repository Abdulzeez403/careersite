import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface CategoryCardProps {
    href: string;
    imgSrc: any;
    title: string;
    careersCount?: number;
    top?: boolean
    className?: any
    onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ href, imgSrc, title, className, onClick }) => {
    return (

        <div className="cursor-pointer p-4 pl-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" onClick={onClick}>
            <Link href={href} className={`flex items-center rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300  border-2 ${className} `}
            >
                <div className="relative pb-2/3">
                    <Image src={imgSrc} alt={title} width={70} height={70} />
                </div>
                <div className="p-2">
                    <h5 className="text-lg font-semibold mb-2">{title}</h5>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;
