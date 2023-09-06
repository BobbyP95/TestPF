
import { links } from "./data"

export type sectionName = (typeof links)[number]["name"]

export type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

export type ActiveSectionContextProps = {
    activeSection: sectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>
    lastClick: number,
    setLastClick: React.Dispatch<React.SetStateAction<number>>
}
