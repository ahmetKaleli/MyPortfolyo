import React from 'react'
import { motion } from 'framer-motion';
export default function Header() {

 const text = "Hello World"
 const letters = text.split(" ")
 
  return (
    <div className='h-[100px] flex flex-row justify-between items-center px-[100px] border-b-2 border-gray-300 shadow-lg'>
    <motion.p
        className="text-5xl font-bold outline-none"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}  
            animate={{
              opacity: [0, 1, 0],         
              y: [20, 0, -20],           
            }}
            transition={{
              delay: index * 2,       
              duration: 3.5,             
              repeat: Infinity,         
              repeatType: "loop",       
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.p>

        <div>
            <ul className=' flex flex-row space-x-4 font-bold cursor-pointer'>
                <li className='hover:bg-gray-300 focus:bg-gray-500 px-2 py-1 rounded'><a>Home</a></li>
                <li className='hover:bg-gray-300 focus:bg-gray-500 px-2 py-1 rounded'><a href='https://github.com/ahmetKaleli?tab=repositories' target='blank'>Projects</a></li>
                <li className='hover:bg-gray-300 focus:bg-gray-500 px-2 py-1 rounded'><a href='https://www.linkedin.com/in/ahmet-kaleli-28308a270/' target='blank'>Contact</a></li>
            </ul>
        </div>
       
  
    </div>
  )
}
