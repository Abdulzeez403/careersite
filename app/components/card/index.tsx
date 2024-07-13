import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
    href: string;
    imgSrc: any;
    title: string;
    careersCount: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ href, imgSrc, title, careersCount }) => {
    return (
        <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
            <Link className="flex rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300  border-2" href={href}>
                <div className="relative pb-2/3">
                    <Image src={imgSrc} alt={title} width={70} height={70} />
                </div>
                <div className="p-2">
                    <h5 className="text-lg font-semibold mb-2">{title}</h5>
                    <div className="text-black font-medium flex items-center">
                        <span>{careersCount} Careers</span>
                        <i className="feather-arrow-right ml-2"></i>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;
