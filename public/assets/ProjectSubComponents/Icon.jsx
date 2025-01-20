

const Icon = ({altText,imgUrl}) => {
  return (
    <div className="h-[40px] w-[40px] sm:h-[40px] sm:w-[40px] md:h-[44px] md:w-[44px] lg:h-[50px] lg:w-[50px] rounded-full border-2 border-[#444A55] flex items-center justify-center"><img className="lg:w-[30px] lg:h-[30px] md:w-[24px] md:h-[24px] sm:h-[20px] sm:w-[20px] h-[20px] w-[20px]" src={imgUrl} alt={altText} /></div>
  )
}

export default Icon