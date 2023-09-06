"use client"
import React from 'react'
import { projectsData } from '@/lib/data'

import SectionHeading from './sectionHeading'
import Project from './project'
import { useGetView } from '@/lib/hooks'

export default function Projects() {
 const ref = useGetView("Projects",0.5)

  return (
    <section id='projects' className='scroll-mt-24 mb-28'
    ref={ref}
    >
        <SectionHeading>My projects</SectionHeading>
                <div>
            {projectsData.map((project,index) =>(
                <React.Fragment key={index}>
                    <Project {...project}/>
                </React.Fragment>
            ))}
        </div>
        
    </section>
  )
}

// type ProjectProps = (typeof projectsData)[number]
// function Project({title, description, tags, imageUrl}:ProjectProps) {
//     return <section className='relative group max-w-[50rem] sm:h-[18rem] rounded-xl bg-stone-100 border border-stone-300 my-8 mx-3 overflow-hidden even:pr-6  hover:bg-stone-300 transition'>
//         <div className='w-[60%]  mt-8 ml-10 border-  mb-3 h-[75%]  flex flex-col justify-between sm:w-1/2 group-even:ml-[40%] group-even:sm:ml-[50%]'>
//             <div>
//             <h2 className='text-center font-bold text-2xl mb-3'>{title}</h2>
//             <p className='text-xs sm:text-xl text-gray-600'>{description}</p>
//             </div>
            
//             <ul className='flex flex-wrap gap-2 my-4  sm:gap-4'>
//                 {tags.map((tag,index) =>
//                 <li key={index} className='text-white  bg-gray-800 px-3 py-1 rounded-full text-xs' >{tag}</li>
//                 )}
//             </ul>
//         </div>
//         <Image src={imageUrl} alt='Project images'
//         className=' absolute top-8 rounded-lg drop-shadow-2xl right-[-7rem] w-[50%] transition
//         group-hover:-translate-x-3
//         group-hover:scale-110
//         group-hover:-rotate-2
        
//         group-even:right-[initial]
//         group-even:left-[-7rem]
        
//         group-even:group-hover:rotate-2
//         group-even:group-hover:translate-x-3
//         '
//         />
//     </section>
// }

// const p2=({title, description, tags, imageUrl}:ProjectProps)=>{
//     return <div>{description}</div>
// }