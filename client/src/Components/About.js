import React from 'react'
import SectionTitle from './SectionTitle.js'
import { useSelector } from 'react-redux'

const About = () => {
    const {portfolioData} = useSelector(state => state.root)
  return (
    <div>
        <SectionTitle title="About"/>
        
    <div className='flex sm:flex-col'>
        <div className='h-[50vh] w-[50vh]'>
        <dotlottie-player src="https://lottie.host/3f18519b-188e-49af-984b-6933a6b2bb63/BRHkVfPakI.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
        </div>
        <div className='flex flex-col gap-5 w-1/2 sm:w-full pl-7'>
            <p className='text-gray-200'>
            {portfolioData?.about.description_one}
            </p>
            <p className='text-gray-200'>
            {portfolioData?.about.description_two}
            </p>
        </div>
    </div>

    <div className='text-tertiary mt-10'>
        <h1 className='text-xl'>Here are few technology I've been working with recently:</h1>
        <div className='flex flex-wrap gap-10 mt-5'>
        {
            portfolioData?.about.skills.map((skill,index) => (
                <div key={index} className='border border-tertiary py-3 px-10'>
                    <h1>{skill}</h1>
                </div>
            ))
        }
        </div>
    </div>
    </div>
  )
}

export default About