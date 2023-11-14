"use client"

import React, {createContext, useContext} from 'react'
import { motion, useReducedMotion } from "framer-motion"

const  FadeInContext = createContext(false)
const viewPort = { once: true, margin:"0px 0px -200px"}

const FadeIn = (props:any) => {
    const shouldReduceMotion = useReducedMotion();
    const isInstaggerGrp = useContext(FadeInContext)

  return (
      <motion.div 
      variants={{
        hidden:{opacity:0, y:shouldReduceMotion ? 0 : 24},
        visible:{opacity:1, y:0}
      }}
      transition={{duration: 0.7}}
      {...(
        isInstaggerGrp ? {} : {
            initial:"hidden",
            whileInView: "visible",
            viewPort,
        }
      )}
      {...props}
      />
    )
}

export default FadeIn

export const FadeInStagger = ({ faster = false, ...props }) => {
    return (
      <FadeInContext.Provider value={true}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewPort}
          transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
          {...props}
        />
      </FadeInContext.Provider>
    );
  };