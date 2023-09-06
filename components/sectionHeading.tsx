import React, { Children } from 'react'

type headingProps = {
    children: React.ReactNode;
}
export default function SectionHeading({children}:headingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{children}</h2>
  )
}
