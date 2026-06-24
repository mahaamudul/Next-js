"use client";
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const nav_links = [
        {
            name: 'Home',   
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        }
    ];  

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight text-gray-900 transition hover:text-gray-600"
                >
                    Blog
                </Link>

                <div className="flex items-center gap-2 rounded-full bg-gray-100 p-1 shadow-sm ring-1 ring-gray-200">
                    {nav_links.map((item) => {
                        return (
                            <Link
                                key={item.link}
                                href={item.link}
                                className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-white hover:text-gray-900 hover:shadow-sm"
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;