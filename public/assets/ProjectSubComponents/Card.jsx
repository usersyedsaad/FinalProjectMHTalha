import React from 'react'

const Card = () => {
  return (
    <div className='pl-[2.22%] h-full w-full flex flex-col items-start justify-between gap-12' style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.20)' }}>
      <div className='  '><p className='md:text-7xl xl:text-8xl text-[#01B7C34D] font-light leading-normal tracking-normal md:tracking-[-4.48px] text-5xl'>01</p></div>
      
      <div>
        <h4 className='  md:text-3xl xl:text-4xl leading-normal tracking-[-1.6px] font-light'>Design</h4>
        <p className='  md:text-xl xl:text-2xl leading-normal tracking-[-0.24px] font-light text-[#A4A7AC]'>I make web designs that engage your audience and create the user experience you want.</p>
      </div>
    </div>
  )
}

export default Card