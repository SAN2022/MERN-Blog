import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Techie Blog
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden focus:outline-none"
        >
          <span className="text-2xl">☰</span>
        </button>

        {/* Nav Links */}
        <ul
          className={`flex flex-col lg:flex-row lg:space-x-6 absolute lg:static left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent px-6 py-4 lg:p-0 transition-all duration-300 ${
            open ? "top-16 opacity-100" : "top-[-250px] opacity-0 lg:opacity-100"
          }`}
        >
          <li>
            <Link to="/" className="block py-2 hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="block py-2 hover:text-gray-300">
              Posts
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 hover:text-gray-300">
              About
            </Link>
          </li>
          {/* <li>
            <a href="#" className="block py-2 hover:text-gray-300">
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
