import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <footer>
      <div className="bg-primary text-center p-3 text-light">
        <h2>Contact Us</h2>

        <h4>
          <IoMdMail /> rbuilder@gmail.com
        </h4>
        <h5>
          <IoPhonePortraitOutline /> 1234567892
        </h5>
        <h3 className='mt-4'>connect with us</h3>
        <FaWhatsapp size={30} />
        <FaInstagram size={30} />
        <FaLinkedin size={30} />

        <h5>Designed and build with ❤️ using React</h5>
      </div>
    </footer>
  )
}

export default Footer