"use client";
import React from 'react'
import Image from '@/node_modules/next/image'
import { motion } from "framer-motion"
import Link from '@/node_modules/next/link';
import { BsArrowRight, BsDownload, BsGithub, BsLinkedin } from "react-icons/bs"
import { useGetView } from '@/lib/hooks';
import { useActiveSection, } from '@/lib/hooks';

export default function Intro() {
  const ref = useGetView("Home")
  const {setActiveSection,setLastClick} = useActiveSection()
  const handleClick = () =>{
    setActiveSection('Contact');
    setLastClick(Date.now())
  }
  return (
    <section id='Home' className='mb-28 max-w-[50rem] '
      ref={ref}
    >

      <div className='flex justify-center items-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.6,
            }}
          >
            <Image src="/daffy.png" alt='banku'
              width='192'
              height='192'
              priority={true}
              className='w-[100px] mt-[120px] rounded-full border-[.45rem] border-white shadow-lg sm:w-40 sm:border-[.65rem]'
            />
          </motion.div>
          <motion.div className='absolute -z-10 sm:top-[120px] sm:w-[160px] sm:h-[160px] rounded-full opacity-20 bg-gray-100 bg-opacity-20'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.5,
            }}
          ></motion.div>

          <motion.span className='absolute cursor-default top-[120px] text-2xl sm:text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              delay: 0.2,
              duration: 0.5
            }}
          >
            😎
          </motion.span>
        </div>
      </div>
      <motion.p className='mb-10 text-center mt-4 px-4 text-2xl sm:leading-[3rem] font-medium sm:text-4xl '
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        Hello, I'm <br />
        <span className='italic'><b>Bobby Bruce Appiah</b></span> <br />
        A Front-end Developer/Graphics Designer with a diverse range of skills including <b>React(Next.js),TypeScript, MySQL, Node, Python, Adobe Photoshop & Illustrator.</b>
      </motion.p>
      <motion.div className='flex flex-wrap gap-4 items-center justify-center'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{
          delay: 0.4,
        }}
      >
        <Link href='#contact' className='group flex justify-center items-center gap-2 bg-black text-white  px-4 py-4 shadow-md rounded-full sm:text-2xl outline-none  focus:scale-110 hover:scale-110 active:scale-105 transition-all'
        onClick={()=>{handleClick}}
        >
          contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition-all' />
        </Link>
        <a href="/CV.pdf" download className='group flex justify-center shadow-md items-center gap-2 bg-white  px-4 py-4 rounded-full border-2 border-gray-400 sm:text-2xl focus:scale-110 hover:scale-110 active:scale-105 transition-all'>
          Download CV <BsDownload className='group-hover:translate-y-1 transition-all' />
        </a>
        <a href="https://github.com/BobbyP95" target="_blank" className='flex justify-center shadow-md items-center gap-2 bg-white  p-4 rounded-full border-2 border-gray-400 sm:text-2xl focus:scale-110 hover:scale-110 active:scale-105 transition-all'>
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/bobby-bruce-appiah-840358218/" target="_blank" className='flex justify-center shadow-md items-center gap-2 bg-white  p-4 rounded-full border-2 border-gray-400 sm:text-2xl focus:scale-110 hover:scale-110 active:scale-105 transition-all'>
          <BsLinkedin />
        </a>
      </motion.div>


    </section>
  )
}
