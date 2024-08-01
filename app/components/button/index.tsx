import React, { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    loading?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ icon, children, className = '', loading = false, ...props }) => {
    return (
        <button
            className={`flex items-center justify-center px-6 py-2 border border-white text-md font-medium rounded-md w-full text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-slate-300 my-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
            disabled={loading}
            {...props}
        >
            {loading ? (
                <span className="loader"></span>

            ) : (
                <>
                    {children}
                </>
            )}
        </button>
    );
};

export default CustomButton;
