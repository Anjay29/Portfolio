import React, { useState } from 'react'
import SectionTitle from './SectionTitle.js'
import { useSelector } from 'react-redux'

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState(0)
  const {portfolioData} = useSelector(state => state.root)

  return (
    <div className='pt-11'>
        <SectionTitle title="Experience"/>

        <div className='flex gap-20 sm:flex-col'>
            <div className='flex flex-col gap-10 border-l-2 border-[#98f5f3] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                {portfolioData?.experiences.map((experience, index) => (
                  <div key={index} onClick={() => setSelectedItem(index)} className='cursor-pointer'>
                    <h1 className={`text-xl px-5 py-3 ${selectedItem === index ? 'text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#73f0ee38]' : 'text-gray-200'}`}>{experience.period}</h1>
                  </div>
                ))}
            </div>
                <div className='space-y-4'>
                    <h1 className='text-secondry text-xl'>{portfolioData?.experiences[selectedItem].company}</h1>
                    <h1 className='text-tertiary text-xl'>{portfolioData?.experiences[selectedItem].role}</h1>
                    <h1 className='text-gray-200 '>{portfolioData?.experiences[selectedItem].description}</h1>
                </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Experience