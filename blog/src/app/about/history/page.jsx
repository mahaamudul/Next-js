import Link from 'next/link';
import React from 'react';

const HistoryPage = () => {
    return (
        <div className="h-screen pt-10">
            <div className="flex justify-center items-center gap-4 pt-10 ">
                <Link   href="/about/history/vision">Vision</Link>
                
            </div>
            this is history page
        </div>
    );
};

export default HistoryPage;