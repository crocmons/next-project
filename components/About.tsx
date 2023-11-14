"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import FadeIn from './FadeIn'

const About = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-20 lg:py-20 xl:flex-row'>

      <div className='mx-auto w-full md:w-1/2 relative flex justify-center items-center gap-6'>
       <motion.div initial={{y:200}} animate={{y:0}} transition={{duration:0.9}} className="flex items-center justify-center" >

       <Image 
        src="/Aboutus.jpeg"
        alt='banner1'
        className='rounded object-contain'
        width={340}
        height={100}
       />
       
       </motion.div>

      </div>
      
     {/* {right side}    */}
     <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>

        <FadeIn>
        <h4 className='bold-52 lg:bold-64'> 
        About Us
        </h4>
        </FadeIn>

        <FadeIn>
        <p className='regular-16 mt-6 text-gray-500 xl:max-w-[520px] tracking-wide'>Specializing in cutting-edge software, website development, and impactful digital marketing, our dedicated professionals transform ideas into seamless solutions, crafting captivating websites and executing strategies that propel businesses to new heights.</p>
        </FadeIn>

        

      </div>
    </section>
  )
}

export default About