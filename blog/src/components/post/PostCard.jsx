import React from 'react';

const PostCard = (props) => {
    return (
        <div className="border border-gray-500 rounded-lg p-4 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
        </div>
    );
};

export default PostCard;