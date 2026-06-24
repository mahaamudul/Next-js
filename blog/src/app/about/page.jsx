import About from '../../pages/About/About';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="h-screen">

            <Link href="/about/history">History</Link>
            
            <About></About>
        </div>
    );
};

export default page;