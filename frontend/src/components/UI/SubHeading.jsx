import React from 'react'

const SubHeading = ({heading,align = "text-center" }) => {
  return (
    <div className="w-full   ">
    <h2 className={`text-myLG  ${align} tracking-wide text-[18px] sm:text-[22px] lg:text-[26px] font-bold `}> {heading}</h2>
  </div>
  )
}

export default SubHeading