
import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-12 font-[verdana]  ">
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8  flex justify-evenly">
            
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-white">CTF</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Nulla nec purus feugiat, molestie ipsum et, consequat nibh.</p>
                    
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-gray-400" aria-label="Facebook">
                            <FaFacebookSquare size={45} />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-400" aria-label="Instagram">
                            <FaInstagram size={45} />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-400" aria-label="Twitter">
                            <FaTwitterSquare size={45} />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-400" aria-label="GitHub">
                            <FaGithubSquare size={45} />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-400" aria-label="Dribbble">
                            <FaDribbbleSquare size={45} />
                        </a>
                    </div>
                </div>
               
                <div className="space-y-4">
                    <h2 className="text-3xl font-medium text-gray-400">Support</h2>
                    <ul className="text-lg">
                        <li className="py-1"><a href="#" className="text-gray-300 text-2xl hover:text-gray-400">Pricing</a></li>
                        <li className="py-1"><a href="#" className="text-gray-300 text-2xl hover:text-gray-400">Documentation</a></li>
                        <li className="py-1"><a href="#" className="text-gray-300 text-2xl hover:text-gray-400">Guides</a></li>
                        <li className="py-1"><a href="#" className="text-gray-300 text-2xl hover:text-gray-400">API Status</a></li>
                    </ul>
                </div>
                
                <div className="space-y-4">
                    <h2 className="text-3xl font-medium text-gray-400">Company</h2>
                    <ul className="text-lg">
                        <li className="py-1"><a href="#" className="text-gray-300 text-2xl hover:text-gray-400">About</a></li>
                        <li className="py-1"><a href="#" className="text-gray-300 text-2xl hover:text-gray-400">Blog</a></li>
                        <li className="py-1"><a href="#" className="text-gray-300 text-2xl hover:text-gray-400">Jobs</a></li>
                        <li className="py-1"><a href="#" className="text-gray-300 text-2xl hover:text-gray-400">Press</a></li>
                        <li className="py-1"><a href="#" className="text-gray-300 text-2xl hover:text-gray-400">Careers</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center mt-8 border-t border-gray-800 " >
                <p className='text-3xl flex'>&copy; {new Date().getFullYear()} ING Skill Academy. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-gray-400" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-gray-400" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-gray-400" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
