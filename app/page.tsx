import About from "@/components/About";
import Carousel from "@/components/Carousel";
import FAQ from "@/components/FAQ";
import FadeIn from "@/components/FadeIn";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import StarsCanvas from "@/components/StarCanvas";

export default function Home() {
  return (
    <main>
      <FadeIn>  
      <Hero />
      <About />
      <Carousel />
      <StarsCanvas />
      <OurServices />
      <FAQ />
      <GetApp />
      </FadeIn>
    </main>
  )
}
