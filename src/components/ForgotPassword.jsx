import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaHome, FaUserPlus, FaBook } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import Logo from "../assets/logo.svg";
import Image from "./Image";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    // Trim and validate input
    const trimmedPhone = phone.trim();
  
    // Check if phone is empty or not 11 digits
    if (trimmedPhone === "" || trimmedPhone.length !== 11 || !/^\d{11}$/.test(trimmedPhone)) {
      setMessage("⚠️ Please enter a valid 11-digit mobile number");
      return;
    }
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.phone !== trimmedPhone) {
      setMessage("❌ Cannot find account with this phone number");
    } else {
      const fakeOTP = Math.floor(100000 + Math.random() * 900000);
      console.log(`OTP sent to ${trimmedPhone}: ${fakeOTP}`);
      setMessage("✅ Verification Code Sent");
    }
  };
  
  

  return (
    <div className="md:mt-[74px] mx-auto w-full h-full md:w-[366px] md:h-[662px] md:border-[6px] md:border-black rounded-3xl bg-[#F4F8FB] drop-shadow-lg">
      <Image imgSrc={Logo} imgAlt="logo.png" className="w-56 mx-auto mt-1" />
      
      <div className="mt-[142px] mb-[173px] mx-2 rounded-sm shadow-lg bg-white px-4 py-6">
        <h3 className="text-center text-[24px] text-[#F7961D] font-semibold mb-5">
          Forgot Password
        </h3>

        <div className="flex items-center bg-gray-100 border rounded-md overflow-hidden mb-4">
          <IoIosCall className="p-2 text-gray-600 text-5xl bg-gray-300" />
          <input
  type="tel"
  placeholder="Mobile"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="p-2 w-full bg-white focus:outline-none"
/>

        </div>

        {message && <p className="text-center text-sm text-red-500">{message}</p>}

        <button
          onClick={handleSendOTP}
          className="w-full bg-[#F7961D] text-white font-semibold py-2 rounded-md mb-3"
        >
          Verification Code Sent
        </button>

        <div className="text-center text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[#F7961D] font-medium cursor-pointer"
          >
            Register
          </span>
        </div>
      </div>

      <div className="bg-white flex justify-between rounded-b-lg px-3 py-[10px] text-center">
        <a href="/" className="flex flex-col items-center">
          <FaHome className="text-base" />
          <p className="text-sm">Home</p>
        </a>
        <a href="/login" className="flex flex-col items-center text-[#F7961D]">
          <MdLogin className="text-base" />
          <p className="text-sm">Login</p>
        </a>
        <a href="/register" className="flex flex-col items-center">
          <FaUserPlus className="text-base" />
          <p className="text-sm">Register</p>
        </a>
        <a href="/blog" className="flex flex-col items-center">
          <FaBook className="text-base" />
          <p className="text-sm">Blog</p>
        </a>
        <a href="/contact" className="flex flex-col items-center">
          <IoIosCall className="text-base" />
          <p className="text-sm">Contact</p>
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
