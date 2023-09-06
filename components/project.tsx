"use client"
import { useRef } from "react"
import { projectsData } from '@/lib/data'
import Image from '@/node_modules/next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number]
export default function Project({ title, description, tags, imageUrl }: ProjectProps) {

    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.1 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

    return <motion.div href="https://github.com/" target="_blank"
        ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}
        className='group mb-3 sm:mb-8 last:mb-0'
    >
        <section className='relative  max-w-[50rem] sm:h-[18rem] rounded-xl bg-stone-100 border border-stone-300 my-8 mx-3 overflow-hidden group-even:pr-6  hover:bg-stone-300 transition'>
            <div className='w-[60%]  mt-8 ml-10 border-  mb-3 h-[75%]  flex flex-col justify-between sm:w-1/2 group-even:ml-[40%] group-even:sm:ml-[50%]'>
                <div>
                    <h2 className='text-center font-bold text-2xl mb-3'>{title}</h2>
                    <p className='text-xs sm:text-xl text-gray-600'>{description}</p>
                </div>
                <ul className='flex flex-wrap gap-2 my-4  sm:gap-4'>
                    {tags.map((tag, index) =>
                        <li key={index} className='text-white  bg-gray-800 px-3 py-1 rounded-full text-xs' >{tag}</li>
                    )}
                </ul>
            </div>
            <Image src={imageUrl} alt='Project images'
                className=' absolute top-8 rounded-lg drop-shadow-2xl right-[-7rem] w-[50%] transition
        group-hover:-translate-x-3
        group-hover:scale-110
        group-hover:-rotate-2
        
        group-even:right-[initial]
        group-even:left-[-7rem]
        
        group-even:group-hover:rotate-2
        group-even:group-hover:translate-x-3
        '
            />
        </section>
    </motion.div>
}

// const p2=({title, description, tags, imageUrl}:ProjectProps)=>{
//     return <div>{description}</div>
// }