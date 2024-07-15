import React from 'react'

const LeftSider = () => {
  return (
    <div className='fixed left-4 bottom-5 opacity-65 sm:static'>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-col sm:flex-row sm:justify-center gap-5 text-gray-300'>
                <i class="ri-mail-line"></i>
                <a href='https://www.linkedin.com/in/anjay29/'><i class="ri-linkedin-box-fill"></i></a>
                <i class="ri-github-line"></i>
            </div>
            <div className='w-[1px] h-52 justify-center ml-[.5rem] bg-gray-400 sm:hidden'></div>
        </div>
    </div>
  )
}

export default LeftSider