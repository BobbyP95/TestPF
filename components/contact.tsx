"use client"
import React from 'react'
import { useGetView } from '@/lib/hooks'
import SectionHeading from './sectionHeading'
import {BsFillSendCheckFill} from 'react-icons/bs'

import {motion} from 'framer-motion'
export default function Contact()
{
    const ref = useGetView('Contact')
  return (
    <motion.section id='contact' className='mb-28 scroll-mt-30  w-[min(100%,38rem)] sm:mb-40' ref={ref}
    initial={{
      opacity: 0,
      y: 100
    }}
    whileInView={{
      opacity: 1,
      y: 0
    }}
    transition={{
      duration: 0.3
    }}
    
    >
        <SectionHeading> Contact Me</SectionHeading>
        <p className='text-gray-500 text-center'>Please contact me directly at <a className='underline' href='mailto:example@gmail.com'>example@gmail.com</a> or through this form.</p>
        <form action="" className='flex flex-col gap-5 mt-10 '>
            <input type="text" placeholder='example@gmail.com' className='p-3 border-stone-300 border-solid border-2 rounded-xl' />
            <textarea placeholder='Your Message' rows={8} className='p-3 border-stone-300 border-solid border-2 rounded-xl'></textarea>
            
            <button className='flex justify-center items-center gap-3 bg-stone-700 text-white py-3 px-4 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition group max-w-[8rem]'>Submit <BsFillSendCheckFill className='text-white group-hover:-translate-y-2 transition-all opacity-70' /></button>
        </form>
    </motion.section>
  )
}
