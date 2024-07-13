import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 pt-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">CareerGuide</h2>
                        <p className="mt-2">Your guide to a successful career path.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                            <Facebook size={24} />
                        </a>
                        <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                            <Twitter size={24} />
                        </a>
                        <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    &copy; {new Date().getFullYear()} CareerGuide. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
