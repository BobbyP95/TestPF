"use client";
import React from 'react'
import SectionHeading from './sectionHeading'
import { motion } from 'framer-motion'

// import Image from '@/node_modules/next/image'
import { useGetView } from '@/lib/hooks'

export default function About() {
    const ref = useGetView("About", 0.7)

    return (
        <section id='about' className='mb-28 max-w-[50rem] scroll-mt-24'
            ref={ref}
        >

            <motion.div className='flex justify-center flex-col text-center leading-8 items-center'
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <SectionHeading>About Me</SectionHeading>
                <p>
                    <b className=''>I'm</b> a passionate web developer with a strong flair for frontend development and a keen eye for user-centered design. With <i><b>2 years of experience</b></i> in crafting interactive and <i><b>visually appealing websites</b></i>, I thrive on turning ideas into digital experiences that leave a lasting impression.
                </p>
                {/* <br /> */}
                <p>
                    <b className=''>My approach</b> to web development is centered around creating seamless, intuitive, and visually striking user experiences. I believe in the power of combining strong <i><b>coding skills with a deep understanding of design principles to build websites</b></i> that not only function flawlessly but also delight users at every click.
                </p>

                <p>
                    <b className=''>Beyond</b>  coding and design, I have a strong passion for staying up-to-date with the latest industry trends and emerging technologies. Whether it's exploring new <i><b> frontend frameworks or experimenting with creative CSS techniques</b></i>, I'm always eager to expand my skill set and push the boundaries of what's possible on the web.
                </p>
                {/* <div className='group cursor-pointer flex items-center  bg-gray-300 p-2 rounded-[20px]' >
                <h3 className='font-bold  px-2 text-xl' >Loading...</h3>
                <Image src='/loading.svg' alt='Loading'
                    width='50'
                    height='50'
                    className='group-hover:animate-spin '
                />
        
            </div> */}
            </motion.div>

        </section>
    )
}
