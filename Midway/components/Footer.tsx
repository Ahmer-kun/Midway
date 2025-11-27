import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedInIcon } from './Icons';
import type { View } from '../types';

interface FooterProps {
    setActiveView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
    const FooterLink: React.FC<{view: View, children: React.ReactNode}> = ({ view, children }) => (
        <li>
            <button onClick={() => setActiveView(view)} className="text-base text-slate-300 dark:text-slate-400 hover:text-white text-left">
                {children}
            </button>
        </li>
    );

    return (
        <footer className="bg-slate-800 text-white dark:bg-black">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
                <h3 className="text-2xl font-bold text-white">Midway Hospital</h3>
                <p className="text-slate-300 dark:text-slate-400 text-base">
                Providing compassionate care with cutting-edge technology.
                </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-slate-200 dark:text-slate-300 tracking-wider uppercase">Quick Links</h3>
                    <ul className="mt-4 space-y-4">
                        <FooterLink view="doctors">Find a Doctor</FooterLink>
                        <FooterLink view="services">Services</FooterLink>
                    </ul>
                </div>
                <div className="mt-8 md:mt-0">
                    <h3 className="text-sm font-semibold text-slate-200 dark:text-slate-300 tracking-wider uppercase">About Us</h3>
                    <ul className="mt-4 space-y-4">
                        <FooterLink view="mission">Our Mission</FooterLink>
                        <FooterLink view="reviews">Reviews</FooterLink>
                        <FooterLink view="contact">Contact Us</FooterLink>
                    </ul>
                </div>
                </div>
                <div className="md:grid md:grid-cols-1 md:gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-slate-200 dark:text-slate-300 tracking-wider uppercase">Contact</h3>
                        <p className="mt-4 text-base text-slate-300 dark:text-slate-400">123 Health St.<br/>Wellness City, USA 12345</p>
                        <p className="mt-4 text-base text-slate-300 dark:text-slate-400">(555) 123-4567</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="mt-8 border-t border-slate-700 dark:border-slate-800 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
                <a href="#" className="text-slate-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <TwitterIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedInIcon className="h-6 w-6" />
                </a>
            </div>
            <p className="mt-8 text-base text-slate-400 md:mt-0 md:order-1">
                Copyright &copy; {new Date().getFullYear()} Midway Hospital. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;