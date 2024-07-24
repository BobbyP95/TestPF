"use client"
import React from 'react'
import { useGetView } from '@/lib/hooks'
import SectionHeading from './sectionHeading'
import {BsFillSendCheckFill} from 'react-icons/bs'
import { sendEmail } from '@/actions/sendEmail'
import {motion} from 'framer-motion'

export default function Contact()
{
    const ref = useGetView('Contact')
    const sendClientEmail = async (formData: FormData) =>{
      console.log("running on client")
      console.log(formData.get('Email Address'));
      console.log(formData.get('Message'))
    }

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
        <form  className='flex flex-col gap-5 mt-10 '
        action={

          async(formData:FormData)=>{
          await sendClientEmail(formData)

          await sendEmail(formData)
        }
        }
       
        
        >
            
            <input type="email" 
            name='Email Address'
            required={true}
            placeholder='example@gmail.com' 
            className='p-3 border-stone-300 border-solid border-2 rounded-xl' />
            <textarea 
            name='Message'
            placeholder='Your Message' 
            rows={8} 
            required
            maxLength={500}
            className='p-3 border-stone-300 border-solid border-2 rounded-xl'></textarea>
            
            <button className='flex justify-center items-center gap-3 bg-stone-700 text-white py-3 px-4 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition group max-w-[8rem]'>Submit <BsFillSendCheckFill className='text-white group-hover:-translate-y-2 transition-all opacity-70' /></button>
        </form>
    </motion.section>
  )
}
