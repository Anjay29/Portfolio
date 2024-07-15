import React from 'react'
import { useSelector} from "react-redux"

const Intro = () => {
  const {portfolioData} = useSelector(state => state.root)
  console.log(portfolioData);
  return (
    <div className='h-[70vh] flex flex-col items-start justify-center gap-8'>
        <h1 className='text-gray-200'>Hi, I am</h1>
        <h1 className='text-secondry text-7xl sm:text-3xl font-semibold '>Anjay Kumar</h1>
        <h1 className='text-gray-200 text-6xl sm:text-2xl font-semibold'>{portfolioData?.intro.caption}</h1>
        <p className='w-1/3 text-gray-200'>{portfolioData?.intro.description}</p>
        <button className='border border-tertiary text-tertiary p-3 text-[1.4rem]'>Get Started</button>
    </div>
  )
}

export default Intro