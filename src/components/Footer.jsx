import React from 'react'
import {FaCopyright} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='max-[450px]:py-5 py-8 flex justify-center items-center w-100%  bg-black shadow-lg shadow-gray-900 '>
        <p className='flex items-center font-bold text-[15px] sm:text-[16px]  text-gray-500  '><FaCopyright size={23} className='mr-2 text-blue-500'/> Designed and built by Gobi Kannan</p>
    </div>
  )
}

export default Footer