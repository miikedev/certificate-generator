import React from 'react'
import { motion } from "framer-motion"
const OverlayText = ({name,amount}) => {
  return (
    <div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {duration: .2} }} className='text-yellow-500 text-xs z-10 relative bottom-[7.3rem] left-[5.6rem] font-semibold w-[10rem] text-center'>{amount}ကျပ််</motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {duration: .2} }} className='text-yellow-500 text-xs z-10 relative bottom-[6rem] left-[5.6rem] font-semibold w-[10rem] text-center'>{name}</motion.div>
    </div>
  )
}

export default OverlayText