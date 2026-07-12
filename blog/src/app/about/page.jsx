import About from '../../pages/About/About';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="h-screen">

            <div className="flex justify-center items-center gap-4 pt-10 ">
                <Link   href="/about/history">History</Link>
                
            </div>
            
            <About></About>
        </div>
    );
};

export default page;