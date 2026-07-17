"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathName=usePathname();
    const router=useRouter()
    const nav_links = [
        {
            name: 'Home',   
            link: '/'
        },
        {
            name: 'Blogs',   
            link: '/blogs'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
        {
            name: 'Categories',
            link: '/categories'
        },
        {
            name: 'Posts',
            link: '/posts'
        },
        {
            name: 'Meals',
            link: '/meals'
        }


    ];  

    const handleSignIn = () => {
        router.push('/login');
    }

    
         return (
       
        <nav className="sticky top-0 z-50 shadow-2xl bg-blue-800 backdrop-blur-md">
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
                                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                                    pathName === item.link
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm'
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    
                </div>
                <div className="bg-white text-black px-2 py-1 rounded-full  text-semibold">
                        <button onClick={handleSignIn}>Sign In</button>
                    </div>
            </div>
        </nav>
    );
}

   


export default NavBar;