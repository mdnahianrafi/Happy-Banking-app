import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserPlus, FaBook } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';

const StickyNav = () => {
  return (
    <div className="sticky max-h-screen bottom-0 left-0 right-0 z-50 bg-white flex justify-between rounded-t-lg shadow-[0_-2px_10px_rgba(0,0,0,0.1)] px-3 py-[10px] w-full sm:px-6 sm:py-3">
      <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
        <FaHome className="w-5 h-5" />
        <p className="text-xs mt-1">Home</p>
      </Link>
      <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
        <MdLogin className="w-5 h-5" />
        <p className="text-xs mt-1">Login</p>
      </Link>
      <Link to="/register-page" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
        <FaUserPlus className="w-5 h-5" />
        <p className="text-xs mt-1">Register</p>
      </Link>
      <Link to="#" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
        <FaBook className="w-5 h-5" />
        <p className="text-xs mt-1">Blog</p>
      </Link>
      <Link to="#" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
        <IoIosCall className="w-5 h-5" />
        <p className="text-xs mt-1">Contact</p>
      </Link>
    </div>
  );
};

export default StickyNav;
