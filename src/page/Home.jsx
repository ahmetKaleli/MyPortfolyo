import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div className=' min-h-screen ' >
      <About/>
      <div className='mt-[100px]'>
        <Skills/>  
      </div>


    </div>
  )
}
