import '../../src/index.css';  // This imports the global styles

import React, { useState } from 'react';
import Image from '../components/Image';
import Logo from '../assets/logo.svg';
import { IoIosCall, IoIosFemale, IoIosMale } from 'react-icons/io';
import { FaUser, FaWallet, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaHome, FaUserPlus, FaBook } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaBriefcase } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import StickyNav from '../components/StickyNav';

const RegisterPage = () => {
  const [gender, setGender] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with gender:', gender);
  };

  return (
<>
<div >
      <Image imgSrc={Logo} imgAlt="logo.png" className="w-56 mx-auto mt-1" />

      {/* Content */}
      <div className="bg-white m-3 shadow-lg relative">
        <p className="text-center text-[#F7961D] text-2xl font-semibold leading-10">Register</p>

        <form onSubmit={handleSubmit} className="mx-3 space-y-3">
          {/* Name */}
          <div>
            <p className='text-[#464646] text-base leading-6'>Name <span className='text-red-500'>(required)</span></p>
            <div className="flex my-1">
              <label><FaUser className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
              <input type="text" name="name" placeholder='Name' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
            </div>
          </div>

          {/* Mobile */}
          <div>
            <p className='text-[#464646] text-base leading-6'>Mobile <span className='text-red-500'>(required)</span></p>
            <div className="flex my-1">
              <label><IoIosCall className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
              <input type="tel" name="mobile" placeholder='Mobile' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
            </div>
          </div>

          {/* Email */}
          <div>
            <p className='text-[#464646] text-base leading-6'>Email <span className='text-red-500'>(required)</span></p>
            <div className="flex my-1">
              <label><IoIosCall className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
              <input type="email" name="email" placeholder='Email' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
            </div>
          </div>

          {/* Gender */}
          <div className='my-2'>
            <p className='text-[#464646] text-base leading-6'>Gender <span className='text-red-500'>(required)</span></p>
            <div className="flex my-2 border border-gray-300 rounded overflow-hidden">
              {[
                { label: 'Male', icon: <IoIosMale className="mr-2 text-2xl" /> },
                { label: 'Female', icon: <IoIosFemale className="mr-2 text-2xl" /> },
              ].map((option) => (
                <button
                  type="button"
                  key={option.label}
                  onClick={() => setGender(option.label)}
                  className={`w-1/2 py-2 text-sm font-medium flex items-center justify-center transition ${
                    gender === option.label
                      ? 'bg-[#F7961D] text-white'
                      : 'bg-white text-[#464646] hover:bg-orange-100'
                  }`}
                >
                  {option.icon}
                  {option.label}
                </button>
              ))}
            </div>
            <input type="hidden" name="gender" value={gender} />
          </div>

          {/* Profession */}
          <div>
            <p className='text-[#464646] text-base leading-6'>Profession <span className='text-red-500'>(required)</span></p>
            <div className="flex my-1">
              <label><FaBriefcase className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
              <input
                list='professions'
                name="profession"
                placeholder='Select or type your profession'
                className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full'
                required
              />
              <datalist id="professions">
                <option value="Student" />
                <option value="Teacher" />
                <option value="Engineer" />
                <option value="Doctor" />
                <option value="Nurse" />
                <option value="Software Developer" />
                <option value="Designer" />
                <option value="Business Owner" />
                <option value="Freelancer" />
                <option value="Other" />
              </datalist>
            </div>
          </div>

          {/* Wallet Balance */}
          <div>
            <p className='text-[#464646] text-base leading-6'>Wallet Balance <span className='text-red-500'>(required)</span></p>
            <div className="flex my-1">
              <label><FaWallet className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
              <input type="number" name="wallet" placeholder='Enter amount' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
            </div>
          </div>

          {/* Address */}
          <div>
            <p className='text-[#464646] text-base leading-6'>Address <span className='text-red-500'>(required)</span></p>
            <div className="flex my-1">
              <label><IoLocationSharp className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
              <input type="text" name="address" placeholder='Address' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
            </div>
          </div>

          {/* Password */}
<div>

          <div className="relative  mt-2">
         
          <div>
            <p className='text-[#464646] text-base leading-6'>Password <span className='text-red-500'>(required)</span></p>
            <div className="flex my-1">
              <label><FaLock className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
              <input  type={showPassword ? 'text' : 'password'} name="address" placeholder='Password' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
            </div>
          </div>
            <div
              className="absolute right-3 top-9 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </div>
          </div>

          <div>
            <p className='text-[#464646] text-base leading-6'>Confirm Password <span className='text-red-500'>(required)</span></p>
            <div className="flex my-1">
              <label><FaLock className="p-3 text-gray-600 text-4xl bg-gray-300 rounded-l-lg" /></label>
              <input  type={showPassword ? 'text' : 'password'} name="address" placeholder='Password' className='pl-1 py-1 focus:outline-none border border-gray-300 rounded-r-lg w-full' required />
            </div>
          </div>
</div>
<div>

</div>


<div className="flex my-2 gap-x-2">
  <input type="checkbox" name="" id="" />
  Agree with <span className='text-[#F7961D] '><a href=""> Terms & Conditions</a></span>
</div>


          <button
          type='submit'
          
            className="my-5 py-[14px] w-full bg-[#F7961D] text-white font-semibold rounded-lg cursor-pointer"
          >
            Registration
          </button>

        </form>

        <div className="flex justify-center">
          <p className="pr-1">Don't have an account?</p>
          <a href="/" className="text-[#F7961D] font-semibold">
            Login
          </a>
        </div>
      </div>


    </div>

</>

  );
};

export default RegisterPage;
