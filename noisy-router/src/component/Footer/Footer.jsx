import React, { PureComponent } from 'react'
import Icon from '../../assets/icon.png'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function Footer () {
    return (
      <div className='pt-3 bg-[rgba(65,65,65,0.97)] grid grid-cols-3'>
        <Link to="/">
          <img
            src={Icon}
            alt=""
            className="mr-3 ml-3 h-12"
          />
        </Link>

 {/* Navigation LInks */}
        <div>
          <h1 className='font-bold text-white mb-2'>Pages</h1>
          <ul>
            <li>
              <NavLink
              to="/"
              className={({isActive}) => `block duration-200 ${isActive ? "text-[#d95300] font-bold" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-[#d95300] lg:p-0`
              }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
              to="/product"
              className={({isActive}) => `block duration-200 ${isActive ? "text-[#d95300]" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-[#d95300] lg:p-0`
              }
              >
                Product
              </NavLink>
            </li>

            <li>
              <NavLink
              to="/about"
              className={({isActive}) => `block duration-200 ${isActive ? "text-[#d95300]" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-[#d95300] lg:p-0`
              }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
              to="/contact"
              className={({isActive}) => `block duration-200 ${isActive ? "text-[#d95300]" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-[#d95300] lg:p-0`
              }
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

      {/* Other Links */}
        
        <div className=''>
          <h1 className='font-bold text-white mb-2'>Contact</h1>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/shivam-chaudhary-0101843ab/"
                target="_blank"
                className="block duration-200 text-white lg:hover:bg-transparent lg:border-0 hover:text-[#d95300] lg:p-0"
              >
                Linkedin
              </a>
            </li>

            <li>
              <a
                href="https://github.com/shivamchaudhary19"
                target="_blank"
                className="block duration-200 text-white lg:hover:bg-transparent lg:border-0 hover:text-[#d95300] lg:p-0"
              >
                Github
              </a>
            </li>

            <li>
              <a
                href="/"
                target="_blank"
                className="block duration-200 text-white lg:hover:bg-transparent lg:border-0 hover:text-[#d95300] lg:p-0"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="mailto:im.chaudharyshiva2919@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block duration-200 text-white lg:hover:bg-transparent lg:border-0 hover:text-[#d95300] lg:p-0"
              >
                Mail
              </a>
            </li>

          </ul>
        </div>
            {/* Policies */}
      <div className="col-span-3 mt-6">

          <div className="grid grid-cols-1 md:grid-cols-2 items-center py-2 gap-2 px-4">

            <p className="text-[#b3b4b2] text-xs sm:text-sm md:text-base text-center md:text-left">
              © 2026 Noisy. All Rights Reserved.
            </p>

            <p className="text-[#b3b4b2] text-xs sm:text-sm md:text-base text-center md:text-right">
              Privacy Policy | Terms & Conditions | Cookies
            </p>

          </div>
        </div>
      </div>
    )
  }
