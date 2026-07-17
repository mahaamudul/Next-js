import Link from "next/link";
import type { Post } from "../../types/posts";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="border border-gray-500 rounded-lg p-4 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-blue-500 underline pb-2 font-semibold">
        Title: {post.title}
      </h2>

      <p>{post.body}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
        <Link href={`/posts/${post.id}`}>View Details</Link>
      </button>
    </div>
  );
}