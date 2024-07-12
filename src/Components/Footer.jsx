import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-12 shadow-2xl text-[25px] ">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8  flex justify-evenly">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-black">CTF</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Nulla nec purus feugiat, molestie ipsum et, consequat nibh.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-black hover:text-gray-400"
              aria-label="Facebook"
            >
              <FaFacebookSquare size={45} />
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-400"
              aria-label="Instagram"
            >
              <FaInstagram size={45} />
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-400"
              aria-label="Twitter"
            >
              <FaTwitterSquare size={45} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-[28px] font-medium text-black">Support</h2>
          <ul className="text-[18px]">
            <li className="py-1">
              <a href="#" className="text-black  hover:text-gray-400">
                Pricing
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-black  hover:text-gray-400">
                Documentation
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-black  hover:text-gray-400">
                Guides
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-[28px] font-medium text-black">Company</h2>
          <ul className="text-[18px]">
            <li className="py-1">
              <a href="#" className="text-black  hover:text-gray-400">
                About
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-black  hover:text-gray-400">
                Blog
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-black  hover:text-gray-400">
                Popular Topics
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-black  hover:text-gray-400">
                Leaderboard
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-black  hover:text-gray-400">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-center mt-8 border-t border-gray-800 ">
        <p className="text-[21px] flex">
          &copy; {new Date().getFullYear()} ING Skill Academy. All rights
          reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-black hover:text-gray-400"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-400"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
