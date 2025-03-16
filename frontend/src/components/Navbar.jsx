import React from 'react'
import logo from '../public/mais-logo1.png'
import GradientText from './ui/gradient.jsx'
import Button from './ui/button.jsx'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full bg-white dark:bg-gray-100 p-1 py-1 shadow-md z-30 fixed top-0">
        <img src={logo} alt="logo" className="w-18 h-18 ml-10" />
        <button>
          <Link to={'/'} className='text-3xl ml-2'>
            Mongol Aspiration
          </Link>
        </button>
        <div className='ml-auto mr-10'>
          <Link to={'/create'} className='text-lg'>
            <Button text='Create' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar