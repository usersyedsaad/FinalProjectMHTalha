import React from 'react'

const WorkCard = (props) => {
  return (
    <div className='flex flex-col w-fit ml-auto mr-auto'>
      <div className='mb-6'><img  src={props.imgURL} alt={props.imgALT} /></div>
      <div className='flex items-center justify-between'>
        <p className='text-lg md:text:2xl lg:text-4xl leading-normal tracking-[-1.6px]'>Project 1</p>
        <p className='font-[500] text-[#A4A7AC] leading-9 text-xs md:text-sm lg:text-base text-right'>Design + Development</p>
      </div>
    </div>
  )
}

export default WorkCard