"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);

  const { title, content } = blogs.find((blog) => blog.slug === slug) || { title: "", content: "" };

  useEffect(() => {
    async function loadBlogs() {
      const res = await fetch("/blogs.json");
      const data = await res.json();
      setBlogs(data);
    }

    loadBlogs();
  }, []);

  return (
    <div className="h-screen pt-10">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}