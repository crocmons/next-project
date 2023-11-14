"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "@/public/styles/swiper.module.css"


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


const Slider = ()=>{
   return(
    <div className='flex flex-col my-2 p-2 glassmorphism'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        cssMode={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        
        <SwiperSlide className={styles.swiperSlide}>
        <Image src="/cognito.svg" alt="profile" className="rounded border object-cover " width={50} height={50} />
        <h1 className="mt-3">Ankit Jangir</h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          officiis provident vitae, doloribus eaque saepe{" "}
        </p>
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide} flex flex-col my-2 p-2 `}>
        <Image src="/cognito.svg" alt="profile" className="rounded border object-cover " width={50} height={50} />
        <h1 className="mt-3">Ankit Jangir</h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          officiis provident vitae, doloribus eaque saepe{" "}
        </p>
        </SwiperSlide>
        
      </Swiper>
    
    </div>
   )
}

export default Slider