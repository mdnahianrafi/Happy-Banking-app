import React, { useState, useEffect } from 'react';
import { IoIosCall } from 'react-icons/io';
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaHome,
  FaUserPlus,
  FaBook,
} from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import Logo from '../assets/logo.svg';
import Image from './Image';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setUser }) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  // Load remembered login
  useEffect(() => {
    const remembered = JSON.parse(localStorage.getItem('rememberedUser'));
    if (remembered) {
      setPhone(remembered.phone);
      setPassword(remembered.password);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser?.phone === phone && storedUser?.password === password) {
      setUser(storedUser);

      // Handle remember me
      if (rememberMe) {
        localStorage.setItem(
          'rememberedUser',
          JSON.stringify({ phone, password })
        );
      } else {
        localStorage.removeItem('rememberedUser');
      }

      navigate('/dashboard');
    } else {
      setError('Invalid phone number or password');
    }
  };

  return (
    <div className="md:mt-[74px] mx-auto w-full h-full md:w-[366px] md:h-[662px] md:border-[6px] md:border-black rounded-3xl bg-[#F4F8FB] drop-shadow-lg">
      <Image imgSrc={Logo} imgAlt="logo.png" className="w-56 mx-auto mt-1" />

      <div className="mt-[132px] mb-[120px] mx-2 rounded-sm shadow-lg bg-white">
        <h3 className="text-center text-2xl md:text-[28px] text-[#F7961D] font-semibold leading-10">
          Login
        </h3>

        <div className="flex m-3">
          <IoIosCall className="p-4 text-gray-600 text-5xl bg-gray-300 rounded-l-lg" />
          <input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="p-3 bg-[#E8F0FE] w-full rounded-r-lg focus:outline-none"
          />
        </div>

        <div className="relative flex m-3">
          <FaLock className="p-4 text-gray-600 text-5xl bg-gray-300 rounded-l-lg" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 bg-[#E8F0FE] w-full pr-10 rounded-r-lg focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <div className="flex m-3 justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label
              htmlFor="remember"
              className="text-sm font-semibold mx-2"
            >
              Remember me
            </label>
          </div>
          <a
            onClick={() => navigate('/forgot-password')}
            className="cursor-pointer"
          >
            <h3 className="text-[#F7961D]">Forgot Password?</h3>
          </a>
        </div>

        <div className="m-3">
          <button
            onClick={handleLogin}
            className="my-5 py-[14px] w-full bg-[#F7961D] text-white font-semibold rounded-lg cursor-pointer"
          >
            Login
          </button>
        </div>

        <div className="flex justify-center">
          <p className="pr-1">Don't have an account?</p>
          <a href="/register" className="text-[#F7961D] font-semibold">
            Register
          </a>
        </div>
      </div>

      <div className="bg-white flex justify-between rounded-b-lg px-3 py-[10px] absolute w-full bottom-[6px]">
        <Link to="/" className="flex flex-col items-center">
          <FaHome className="text-base" />
          <p className="text-sm">Home</p>
        </Link>
        <Link to="/" className="flex flex-col items-center">
          <MdLogin className="text-base" />
          <p className="text-sm">Login</p>
        </Link>

        <Link to="/register-page" className="flex flex-col items-center">
          <FaUserPlus className="text-base" />
          <p className="text-sm">Register</p>
        </Link>
        <a href="#" className="flex flex-col items-center">
          <FaBook className="text-base" />
          <p className="text-sm">Blog</p>
        </a>
        <a href="#" className="flex flex-col items-center">
          <IoIosCall className="text-base" />
          <p className="text-sm">Contact</p>
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
