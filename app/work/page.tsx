"use client"
import React from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ProjectSlider from "@/components/ProjectSlider";
import StarsCanvas from "@/components/StarCanvas";

const Work = () => {
  return (
      <FadeIn>
        <div className="z-20 flex w-full flex-col items-center justify-center mx-auto">
          <h2 className="mt-2 bold-40 lg:bold-64">Our Works</h2>
          <p className="regular-18 px-6 mx-6 items-center justify-center mt-2 text-gray-500  tracking-wide">
            See how we’re driving digital performance for the industry leaders in the market… <br />
            <span className="font-semibold py-2 my-2">We have had the opportunity to work on some great projects with some great people. </span> <br />
            Our work is as diverse as our clients, but there is one commonality: All of it encourages action and inspires behavior.
            Our work is as diverse as our clients, but there is one commonality: All of it encourages action and inspires behavior.
          </p>
        </div>
        <StarsCanvas />
          <ProjectSlider />
      </FadeIn>
  );
};

export default Work;
