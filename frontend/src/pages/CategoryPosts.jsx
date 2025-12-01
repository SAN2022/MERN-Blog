import Post from "../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CategoryPosts() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  const fetchPosts = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/posts/category/${id}`
    );
    setPosts(response.data);
  };

  const fetchCategory = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/categories/${id}`
    );
    setCategory(response.data);
  };

  useEffect(() => {
    fetchPosts();
    fetchCategory();
  }, []);

  if (!category)
    return <p className="text-center py-10">Loading category...</p>;

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>

      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <h4>No posts available</h4>
      )}
    </main>
  );
}
