import React from 'react';
import PostCard from '../../../components/post/PostCard';


const postData= async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

const page = async () => {
    const posts = await postData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            {posts.map((post: any) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default page;