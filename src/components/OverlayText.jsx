import React from 'react'

const OverlayText = ({name,amount}) => {
  return (
    <div>
        <p className='text-yellow-500 text-xs z-10 relative bottom-[7.3rem] left-[5.6rem] font-semibold w-[10rem] text-center'>{amount}ကျပ််</p>
        <p className='text-yellow-500 text-xs z-10 relative bottom-[6rem] left-[5.6rem] font-semibold w-[10rem] text-center'>{name}</p>
    </div>
  )
}

export default OverlayText