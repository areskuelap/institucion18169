import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex justify-evenly sm:justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold">Amazonas</h1>
        </div>
        <div className="flex space-x-6">
          <a href="https://web.facebook.com/groups/1678466822249266" target="_blank">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://web.facebook.com/groups/1678466822249266" target="_blank">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://web.facebook.com/groups/1678466822249266" target="_blank">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

