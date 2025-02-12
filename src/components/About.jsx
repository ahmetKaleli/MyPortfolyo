import React from 'react'
import img from "../img/res.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
export default function About() {
  return (
      <div className='flex flex-row justify-center items-center mt-[100px] ' >
          <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 max-w-xl mr-[50px]">
              <h1 className="text-3xl font-semibold text-gray-800 mb-2">Hi 👋! My name is Ahmet Kaleli</h1>
              <span className="text-xl font-medium text-teal-600 mb-4 block">Frontend Developer</span>
              <p className="text-gray-700 text-lg mb-4">
                  My biggest aim is to improve myself. 💯​ I focus on improving myself by learning new technologies.
                  In addition to HTML, CSS, and JavaScript, I work with React. I aim to create creative solutions
                  and continuously enhance my technical skills.
              </p>
              <div className=' flex flex-row justify-end pr-5'>
                <a href='https://www.instagram.com/ahmetkkaleli/' target='blank'><FaInstagram className='text-3xl cursor-pointer hover:text-pink-500 mr-5'/></a>
                <a href='https://github.com/ahmetKaleli' target='blank'><IoLogoGithub className='text-3xl cursor-pointer hover:text-blue-500 mr-5'/></a>
                <a href='https://www.linkedin.com/in/ahmet-kaleli-28308a270/' target='blank'><FaLinkedin className='text-3xl cursor-pointer hover:text-black-500'/></a>
              </div>
          </div>
          <div >
              <img className='mt-[15px] rounded-full' src={img} width={250} height={250} />
          </div>
    </div>
  )
}
