import React,{useContext, useEffect} from 'react';
// import { ActiveSectionContext,sectionName } from './active-section-context';
import { ActiveSectionContext } from '@/context/active-section-context';
import type {sectionName} from '@/lib/types'
import { useInView } from 'react-intersection-observer';


export const useActiveSection = ()=>{
    const context = useContext(ActiveSectionContext)

    if (context === null) {
        throw new Error("ActiveSectionContext should not be null")
    }
    return context
}

type GetViewType ={
    children: React.ReactNode,
    name: sectionName 
    
}

// Bobbys own 'rap in a div method' creates a component
// export const GetView = ({children,name}:GetViewType)=> {
//     const [ref, inView] = useInView({
//         threshold: 0.5
//     })
//     const {setActiveSection,lastClick} = useActiveSection()
//     // console.log(inView + " "+name)
//     useEffect(()=>{
//         if (inView === true && Date.now() - lastClick >1000 ) {
//             setActiveSection(name)
//         }
//     },[inView, setActiveSection, name, lastClick])
//   return (
//     <div
//     ref={ref}
//     >{children}</div>
//   )
// }

export const  useGetView = (sectionName:sectionName, threshold=0.5)=> {
    const [ref, inView] = useInView({
        threshold: threshold,
    })
    const {setActiveSection,lastClick} = useActiveSection()
    // console.log(inView + " "+name)
    useEffect(()=>{
        if (inView === true && Date.now() - lastClick >1000 ) {
            setActiveSection(sectionName)
        }
    },[inView, setActiveSection,sectionName, lastClick])
  return ref
}
