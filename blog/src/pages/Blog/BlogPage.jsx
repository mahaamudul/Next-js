"use client";

import { useEffect, useState } from "react";
import BlogCard from '../../components/blog/BlogCard'

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const res = await fetch("/blogs.json");
      const data = await res.json();
      setBlogs(data);
    };

    loadBlogs();
  }, []);

  console.log(blogs);

  return (
    <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogPage;