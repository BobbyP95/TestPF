import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
const inter = Inter({ subsets: ['latin'] })
import ActiveSectionContextProvider from '@/context/active-section-context'

export const metadata: Metadata = {
  title: "Bobby's Next.js PF website",
  description: 'Portfolio website using Next.js, Typescript & TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className}  bg-gray-100 text-gray-950 relative ]`}>
        
      <div className="bg-[#ffdd6f72] -z-10 absolute top-[-6rem] right-[20rem] h-[30rem] w-[30rem] rounded-full blur-[15rem] sm:w-[68.75rem]  "></div>
      <div className="bg-[#2b87c05a] -z-10 absolute top-[20rem] left-[11rem] h-[30rem] w-[12rem] rounded-full blur-[15rem] sm:w-[28.75rem] md:w-[20rem] lg:w-[18rem]  "></div>
      <ActiveSectionContextProvider>
        <Header/>
        {children}
      </ActiveSectionContextProvider>
        
        </body>
    </html>
  )
}
