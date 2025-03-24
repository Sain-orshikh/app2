import React from 'react'
import logo from '../public/mais-logo1.png'
import mgl from '../public/mongolia.png'
import en from '../public/english.png'
import { IoSearch } from "react-icons/io5";

import { Link } from 'react-router-dom'

import Menu from './ui/menu.jsx';

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full bg-white dark:bg-gray-100 p-1 py-1 shadow-md z-30 fixed top-0">
        <button className='flex flex-row items-center hover:cursor-pointer'>
          <img src={logo} alt="logo" className="w-18 h-18 ml-10" />
          <Link to={'/'} className='text-3xl ml-2'>
            Mongol Aspiration
          </Link>
        </button>
        <div className='flex flex-row ml-auto mr-4 space-x-4'>
          <div className='flex flex-row items-center group'>
            <div className='h-8 border-l p-1 hover:bg-gray border-t border-b border-gray-500 rounded-l-md group-focus-within:outline flex items-center justify-center'>
              <IoSearch fontSize={25} className='hover:cursor-pointer text-gray-700'/>
            </div>
            <input
              type="text"
              placeholder="Search" 
              className="w-48 h-8 border border-gray-500 rounded-r-md pl-2 group-focus-within:outline"
            />
          </div>
          <Menu/>
        </div>
      </div>
    </>
  )
}

export default Navbar