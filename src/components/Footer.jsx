import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Lucky Draw @{year}</h1>
        </div>
    </div>
  )
}

export default Footer