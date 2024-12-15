
import React from 'react'

const Button = ({text,isPlacedAtLast}) => {
  return (
    <div className={` flex`}>
      
      <button className={`bg-gradient-to-r from-[#F39519] to-[#FFCD67] md:text-base text-white rounded-md text-xs p-2 px-4 md:p-2 md:py-3 md:px-6`}>{text}</button>

    </div>
  )
}

export default Button;


