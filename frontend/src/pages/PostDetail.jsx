import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetail() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!post) return <p className="text-center py-10">Loading...</p>;

  const formattedDate = Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(post.createdAt));

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <h2 className="text-3xl font-bold mb-2">{post.title}</h2>

        <p className="text-gray-500 mb-4">
          {formattedDate} — <span className="text-blue-600">{post.author}</span>
        </p>

        {post.image && (
          <img
            className="mb-6 w-full rounded-xl"
            src={post.image}
            alt={post.title}
          />
        )}

        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
      </article>
    </main>
  );
}
