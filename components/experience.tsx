"use client"
import React from 'react'
import { useGetView } from '@/lib/hooks'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data'
import SectionHeading from './sectionHeading';
export default function Experience() {

    const ref = useGetView("Experience",)
    return (
        <section id='experience' className='mb-28 scroll-mt-32  max-w-[53rem] sm:mb-40' ref={ref}>
            <SectionHeading>My Experience </SectionHeading>
            <VerticalTimeline
                lineColor={"#292524"}
      
            >

                {experiencesData.map((item, index) =>
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: '#ebe9e9',
                                color: '#292524)',
                                border: '1px solid #292524',
                                boxShadow: '12px 12px 2px 1px #7955482e'
                            }}
                            contentArrowStyle={{ borderRight: '7px solid  #292524' }}
                            date={item.date}
                            dateStyle={{ 
                                paddingLeft: '100px'
                             }}
                            iconStyle={{
                                background: '#ebe9e9',
                                color: '#292524',
                                border: ' 3px solid #292524'
                            }}
                            icon={item.icon}


                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                            <p>{item.description}</p>
                        </VerticalTimelineElement>

                    </React.Fragment>
                )}

            </VerticalTimeline>
        </section>
    )
}

{/* <VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ 
    background: '#ebe9e9',
    color: '#292524)',
    border: '3px solid #292524'
}}
contentArrowStyle={{ borderRight: '7px solid  #292524' }}
date="2011 - present"
iconStyle={{ 
    background: '#ebe9e9', 
    color: '#fff',
    border:' 3px solid #292524'
}}


>
<h3 className="vertical-timeline-element-title">Creative Director</h3>
<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
<p>
  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
</p>
</VerticalTimelineElement> */}
