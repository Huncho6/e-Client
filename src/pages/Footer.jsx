import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-green-800'>
      <h1 className='font-bold text-2xl flex justify-center'> Huncho_kicks@2024 </h1>
      <div className='flex justify-center text-xl'>
      <p>contact us</p>
      <FaXTwitter className='text-2xl text-black' />
      <FaInstagram className='text-2xl text-black'/>
      <FaWhatsappSquare className='text-2xl text-black'/>
      </div>
    </div>
  )
}

export default Footer;
