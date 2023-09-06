"use client"
import React from 'react'
import SectionHeading from './sectionHeading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'
import { useGetView } from '@/lib/hooks'


const sectionAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 }
}
const listAnimationVariants = {
    initial: { opacity: 0, x: 100 },
    animate: (index: number) => (
        {
            opacity: 1, x: 0,
            transition: { delay: 0.04 * index }
        }
    )
}
export default function Skills() {

    const ref = useGetView("Skills")
    return (
        <motion.section id='skills' ref={ref} className='mb-28 scroll-mt-32 text-center max-w-[53rem] sm:mb-40'

        >
            <motion.div
                variants={sectionAnimationVariants}
                initial="initial"
                whileInView="animate"
            >
                <SectionHeading>My skills</SectionHeading>
            </motion.div>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-stone-600'>
                {skillsData.map((skill, index) => (
                    <motion.li key={index} className="bg-white py-3 px-5 rounded-xl border-stone-800 border-2 "
                        variants={listAnimationVariants}
                        viewport={{ once: true }}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                    >{skill}</motion.li>
                ))}
            </ul>
        </motion.section>
    )
}
