import { Features } from '@/constants'
import Image from 'next/image'
import React from 'react'
import FadeIn from './FadeIn'
import Button from './Button'
import StarsCanvas from './StarCanvas'

const OurServices = () => {
  return (
    <section className="my-5 flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-center">

        <div className="z-20 flex w-full flex-col lg:w-[90%]">
          <FadeIn>
          <div className='relative flex flex-col justify-center items-center mx-auto'>
            
            <h2 className="bold-40 lg:bold-64">Our Services</h2>
            <p className='regular-18 mt-6 text-gray-500 mb-5'>Whether you're seeking cutting-edge technology solutions, a captivating online presence, or a results-driven digital marketing strategy, our team of experts is dedicated to delivering excellence across all facets of your digital journey. Partner with us and experience the power of seamless integration and unmatched expertise in every service we provide.</p>
          </div>
          </FadeIn>
          <StarsCanvas />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-3 px-3 ">
            {Features.map((feature) => (
              <FadeIn>
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <FadeIn>
    <div className="shadow-xl rounded-t-lg mt-7 mb-5 cursor-pointer">
        <Image src={icon} alt="map" width={95} height={95} className='rounded-full p-6 bg-[#0077B6] mx-auto justify-center items-center'/>

      <div className='p-6 mb-3 px-3'>
      <h2 className="mb-3 text-2xl font-bold text-slate-800">
        {title}
      </h2>
      <p className="text-lg lg:text-md  font-normal text-gray-700">
        {description}
      </p>
      <Button 
       title='See More'
       type='button'
       variant='btn_blue_text mb-2 justify-center items-center mx-auto hover:text-[#7209B7]'

      />
      </div>
    </div>
    </FadeIn>
  )
}

export default OurServices