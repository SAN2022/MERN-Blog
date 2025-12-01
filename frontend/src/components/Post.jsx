import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden mb-6">
      <div className="flex flex-col md:flex-row">

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 md:w-2/3">
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>

          <p className="text-gray-600 mb-4">
            {post.content.substring(0, 300)}...
          </p>

          <Link
            to={`/posts/${post._id}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
