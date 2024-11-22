"use client";
import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div>
    <nav className="bg-blue-600 text-white h-auto sm:h-12 md:h-16 lg:h-16 py-2 px-3 flex flex-col sm:flex-row justify-between items-center">
        <div className='flex items-center space-x-2 mb-4 sm:mb-0'> 
          <img
          src='/banner.jpeg'
          alt='banner'
          className='w-10 h-10 rounded-full'
          />
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold'>
                <a href="#!">Saima Riaz</a> 
                </h1>
         </div>
        <div className='w-full sm:w-auto mb-4 sm:mb-0'>
            <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5'>
                <li><Link href="/" className='hover:text-red-600'>Home</Link></li>
                <li><Link href="/aboutus" className='hover:text-red-600'>About Us</Link></li>
                <li><Link href="/contactus" className='hover:text-red-600'>Contact Us</Link></li>
            </ul>
        </div>
        <div className='w-full sm:w-auto'>
          <ul className='flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
            </ul>
        </div>
   </nav>  
    </div>
  )
}

export default Navbar
