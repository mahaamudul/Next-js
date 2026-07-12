import React from 'react';

const BlogCard = ({ blog }) => {
    const { thumbnail, tags, author, title } = blog;
    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-4">
                <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 text-sm">By {author}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Read More
                </button>
            </div>
        </>
    );
};

export default BlogCard;