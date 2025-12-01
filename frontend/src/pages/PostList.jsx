import Post from "../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:8000/api/posts");
    setPosts(response.data);
  };

  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:8000/api/categories");
    setCategories(response.data);
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left side — Posts */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>

          {posts.length > 0 ? (
            posts.map((post) => <Post key={post._id} post={post} />)
          ) : (
            <h4>No posts available</h4>
          )}
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-1/3 space-y-6">

          {/* About Me */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h5 className="text-xl font-semibold mb-2">About Blog</h5>
            <p className="text-gray-600">
              A simple tech blog where I share practical insights, tutorials, and tips on modern web technologies like Node.js, Express, and MongoDB. Helping developers learn and build smarter, one article at a time.
            </p>
          </div>

          {/* Categories */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h5 className="text-xl font-semibold mb-3">Categories</h5>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li
                  key={category._id}
                  className="border p-2 rounded hover:bg-gray-100"
                >
                  <Link
                    to={`/posts/category/${category._id}`}
                    className="text-black"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </div>
    </main>
  );
}
