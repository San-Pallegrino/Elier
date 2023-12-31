import React, { useState } from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {

  const [email, setEmail] = useState('');

// Function to handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to handle join button click
  const handleJoinClick = () => {
    setEmail('');
  };

  return (
    <footer className="bg-[#27272A] py-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <ul className="text-lg">
            <li className="hover:text-[#78716C]">
              <a href="#">FAQ</a>
            </li>
            <li className="hover:text-[#78716C]">
              <a href="#">Shipping & Retuns</a>
            </li>
            <li className="hover:text-[#78716C]">
              <a href="#">Store Policy</a>
            </li>
            <li className="hover:text-[#78716C]">
              <a href="#">Payments</a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <ul className="text-lg">
            <li className="hover:text-[#78716C]">
              <a href="#">ÉLIER</a>
            </li>
            <li className="hover:text-[#78716C]">
              <a href="#">Tel: 123-456-7890</a>
            </li>
            <li className="hover:text-[#78716C]">
              <a href="#">Email: info@atelier.com</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-4">
            <label className="block">Subscribe to our Newsletter</label>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email here*"
                value={email}
                onChange={handleEmailChange}
                className="mr-2 px-2 py-1 border text-black border-[#27272A]"
              />
              <button className="px-4 py-2 bg-[#78716C] text-white" onClick={handleJoinClick}>
                Join
              </button>
            </div>
          </div>
          <ul className="flex space-x-4 mb-4">
            <li className="hover:text-[#78716C]">
              <a href="#">
                <AiFillFacebook size={24} />
              </a>
            </li>
            <li className="hover:text-[#78716C]">
              <a href="#">
                <AiOutlineTwitter size={24} />
              </a>
            </li>
            <li className="hover:text-[#78716C]">
              <a href="#">
                <AiOutlineInstagram size={24} />
              </a>
            </li>
            <li className="hover:text-[#78716C]">
              <a href="#">
                <AiFillYoutube size={24} />
              </a>
            </li>
          </ul>
          <div className="text-right text-sm mt-8 md:mt-0">
            <p>&copy; {new Date().getFullYear()} ÉLIER. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
