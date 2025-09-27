import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className=" bg-black  p-4 mt-8">
      <div className="grid grid-cols-12 gap-4 justify-around bg-black  p-4 ">
        <div className="col-span-full sm:col-span-3 pr-3">
          <h2 className="text-white text-xl font-semibold">
            CS — Ticket System
          </h2>
          <p className="text-[#A1A1AA]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="col-span-full sm:col-span-2  justify-center ">
          <h2 className="text-white text-xl font-semibold">Company</h2>
          <ul className="text-[#A1A1AA]">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Our Mission</a>
            </li>
            <li>
              <a href="">Contact Saled</a>
            </li>
          </ul>
        </div>
        <div className="col-span-full sm:col-span-2 justify-center ">
          <h2 className="text-white text-xl font-semibold">Services</h2>
          <ul className="text-[#A1A1AA]">
            <li>
              <a href="">Products & Services</a>
            </li>
            <li>
              <a href="">Customer Stories</a>
            </li>
            <li>
              <a href="">Download Apps</a>
            </li>
          </ul>
        </div>
        <div className="col-span-full sm:col-span-2 justify-center ">
          <h2 className="text-white text-2xl font-semibold">Information</h2>
          <ul className="text-[#A1A1AA]">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Join Us</a>
            </li>
          </ul>
        </div>
        <div className="col-span-full sm:col-span-3 justify-center ">
          <h2 className="text-white text-xl font-semibold">Social Links</h2>
          <div>
            <a href="" className="text-[#A1A1AA]">
              <span className="bg-white rounded-full mr-2">
                {' '}
                <FontAwesomeIcon icon={faXTwitter} />
              </span>
              @CS — Ticket System
            </a>
          </div>
          <div>
            <a href="" className="text-[#A1A1AA]">
              <span className="bg-white rounded-full mr-2">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              @CS — Ticket System
            </a>
          </div>
          <div>
            <a href="" className="text-[#A1A1AA]">
              <span className="bg-white rounded-full mr-2">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              @CS — Ticket System
            </a>
          </div>
          <div>
            <a href="" className="text-[#A1A1AA]">
              <span className="bg-white rounded-full mr-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              support@cst.com
            </a>
          </div>
        </div>
      </div>
      <hr className="h-[2px] bg-gray-600" />
      <p className="text-center text-white py-3">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
