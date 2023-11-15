"use client"
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from "react-countup";

const ScrollCount = () => {
  
    const [counter, setCounter] = useState(false); // Initialize to false

  const testimonials = [
    {
      name: "Seher Khan",
      image: "/client-1.jpg",
      text: "We were looking for a company that could help us develop a new e-commerce website. Cognito-AI was the best choice we could have made. They were professional, responsive, and delivered a high-quality product on time and within budget. We highly recommend Cognito-AI to any business looking for web development services.",
    },
    {
      name: "Oshwin Desai",
      image: "/client-2.jpg",
      text: "Cognito-AI has been helping us manage our social media presence for the past year. They have done a great job of increasing our reach, engagement, and website traffic. We are very happy with their services.",
    },
    {
      name: "Devanshi Shah",
      image: "/client-3.png",
      text: "Cognito-AI helped us implement AI in our manufacturing process. This has helped us to improve efficiency, reduce costs, and increase quality. We are very impressed with their expertise and professionalism",
    },
    {
      name: "Chloe Chen",
      image: "/client-2.jpg",
      text: "We were looking for a company that could help us develop a new AI-powered product. Cognito-AI was the perfect partner for us. They have a deep understanding of AI and machine learning, and they were able to help us bring our product to market quickly and efficiently. We are very happy with the results.",
    },
    {
      name: "Navya Sharma",
      image: "/client-1.jpg",
      text: "Cognito-AI has helped us retrieve our money from a fraud. We were scammed out of a significant amount of money, and we were very worried that we would never get it back. But Cognito-AI was able to track down the scammers and recover our money. We are so grateful to Cognito-AI for their help. They are a lifesaver!",
    },
    {
      name: "Emilia Ivanov",
      image: "/client-3.png",
      text: "Cognito-AI helped us to implement AI in our customer service process. This has helped us to improve our customer satisfaction ratings and reduce our costs. We are very impressed with their expertise and professionalism.",
    },
    {
      name: "Armaan Virmani",
      image: "/client-2.jpg",
      text: "We were looking for a company that could help us to research and develop new AI algorithms. Cognito-AI was the ideal partner for us. They have a team of world-class AI researchers, and they were able to help us to develop new algorithms that have improved the performance of our products by 20%. We are very happy with the results.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };



  return (
    <ScrollTrigger
          onEnter={() => setCounter(true)} // Set counter to true when entering the trigger
          onExit={() => setCounter(false)} // Set counter to false when exiting the trigger
        >
          <div className="max-w-[1100px] justify-center w-full m-auto py-12 px-4 relative group overflow-hidden bg-gradient-3 text-white rounded-2xl bg-center bg-cover bg-no-repeat">
            <h1 className="font-bold text-5xl mx-3 flex justify-center items-center top-10 py-2 my-3">
              {counter && <CountUp start={0} end={1500} duration={2} delay={0} />}+
            </h1>
            <div className="glassmorphism flex flex-col md:flex-row md:w-[60%] w-[100%] mx-auto space-x-2 h-auto justify-center items-center">
              <p className="regular-20 mt-3 p-2">
                {testimonials[currentIndex].text}
              </p>

              <div className="flex flex-col justify-center">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="rounded-full my-2 bg-center bg-cover duration-500"
                  width={150}
                  height={150}
                />
                <h1 className="font-bold text-sm mt-1">
                  {testimonials[currentIndex].name}
                </h1>
              </div>
            </div>

            <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className="flex top-4 justify-center pt-2">
              {testimonials.map((testimonial, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </ScrollTrigger>
  )
}

export default ScrollCount