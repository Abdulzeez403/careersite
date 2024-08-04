// components/TestimonialCard.tsx
import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
    description: string;
    clientImage: string;
    clientName: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ description, clientImage, clientName }) => {
    return (
        <div className="bg-theme-gradient-odd p-6 rounded-lg shadow-lg border-2">
            <div className="flex flex-col items-center">

                <p className="text-gray-700 text-center mb-4">{description}</p>
                <div className="flex items-center mt-4">
                    <div className="mr-4">
                        <Image src={clientImage} alt="Client" width={50} height={50} className="rounded-full" />
                    </div>
                    <div>
                        <h5 className="text-lg font-bold">{clientName}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
