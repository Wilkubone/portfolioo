"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

const About = () => { 
    return (
        <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.175}}
        id='about'
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
            After graduating with a degree in{" "}
            <span className="font-medium">Programming</span>, I decided to pursue my
            passion for coding. I enrolled in a school Technican Programmer to be a{" "}
            <span className="font-medium">full-stack web developer</span>.{" "}
            <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. My core stack
            is{" "}
            <span className="font-medium">
              React, Next.js, Node.js, and MongoDB, TailwindCSS and MySQL
            </span>
            . I am also familiar with TypeScript. I am always looking to
            learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a fullstack
            developer.
          </p>
    
          <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            video games, watching movie. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am currently
            learning about{" "}
            <span className="font-medium">sales and making own buisness</span>. I'm also
            with my friends going for ASG.
          </p>
        </motion.section>
      )
 }
export default About
