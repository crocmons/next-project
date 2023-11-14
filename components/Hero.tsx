"use client"
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { motion } from "framer-motion"
import FadeIn from './FadeIn'
import EarthCanvas from './Earth'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-20 lg:py-20 xl:flex-row'>

     {/* {left side}    */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <FadeIn>
        {/* <Image 
          src="/logo.svg"
          alt="logo"
          width={80}
          height={80}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        /> */}
        </FadeIn>

        <FadeIn>
        <h3 className='bold-52 lg:bold-64'> 
        Cognito-AI
        </h3>
        <h4 className='mt-4 bold-32'>Elevate digital Possibilities</h4>
        </FadeIn>

        <FadeIn>
        <p className='regular-16 mt-6 text-gray-500 xl:max-w-[520px] tracking-wide mb-2'>Hello, we are cognito-ai, Ever since our launch in 2020, With a commitment to innovation we have spearheaded numerous projects that have transformed concepts into functional websites and user-friendly applications and a perfect management for your social media.</p>
        </FadeIn>

        {/* <FadeIn>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>
        </FadeIn> */}

        <FadeIn>
        <div className="mt-5 flex flex-col w-full gap-3 sm:flex-row">
        <Button 
            type="button" 
            title="Setup a meeting now" 
            icon='/gmeet-vector.svg'
            variant="black_btn" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_blue_text" 
          />
        </div>
        </FadeIn>
      </div>
      
      <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', duration: 0.2 }}
          className='xl:flex-1 xl:h-auto md:h-[1250px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      {/* </div> */}
    </section>
  )
}

export default Hero