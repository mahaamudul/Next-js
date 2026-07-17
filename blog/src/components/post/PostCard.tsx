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
    </div>
  );
}