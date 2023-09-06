"use client"
import React,{useState, createContext} from 'react'
import { links } from '@/lib/data'
import type { ActiveSectionContextProps, sectionName,ActiveSectionContextProviderProps   } from '@/lib/types'

export const ActiveSectionContext = createContext<ActiveSectionContextProps|null>(null)

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<sectionName>("Home")
    const [lastClick, setLastClick] = useState(0)
  return (
    <ActiveSectionContext.Provider value={{activeSection, setActiveSection, lastClick, setLastClick}}>
        {children}
    </ActiveSectionContext.Provider>
  )
}
