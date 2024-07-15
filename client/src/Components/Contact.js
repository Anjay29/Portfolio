import React from 'react'
import SectionTitle from './SectionTitle'

const Contact = () => {
    const user = {
        "Name": "Anjay Kumar",
        "Email": "itsanjay29@gmail.com",
        "LinkedIn": "https://www.linkedin.com/in/anjay29/",
        "Contact No.": 8059178481
    }

  return (
    <div className='pt-11'>
        <SectionTitle title="Contact"/>
        <div className='flex sm:flex-row items-center justify-between'>
            <div className='flex flex-col text-tertiary gap-3'>
                {`{`}
                {Object.keys(user).map((key,index) => (
                    <h1 key={index} className='pl-10'>
                        <span>{key} : </span>
                        <span>{user[key]}</span>
                    </h1>
                ))}
                {`}`}
            </div>

            <div className='h-[30vh] w-[30vh]'>
            <img src='/undraw_personal_text_re_vqj3.svg' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Contact