import React from 'react'
import cards from '../assets/cards.svg'

function HowItWorks() {
  return (
    <div className='w-full bg-black py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <p className='font-bold text-[#00df9a]'>HOW IT WORKS:</p>
                <p className='font-medium text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit voluptate cupiditate explicabo illum, veritatis ipsa excepturi magnam non aliquam soluta itaque debitis, eos accusantium ullam fugiat quibusdam eligendi. Praesentium, quo?</p>
            </div>
            <img src={cards} alt="cards" className='w-[500px] mx-auto my-4'/>
        </div>
    </div>
  )
}

export default HowItWorks