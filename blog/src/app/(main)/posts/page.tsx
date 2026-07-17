import React from 'react';
import PostCard from '../../../components/post/PostCard';
import { postData } from '../../../services/postDataApi';




const page = async () => {
    const posts = await postData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            {posts.slice(0, 12).map((post: any) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default page;