import React from 'react'
import { motion } from "framer-motion"
const OverlayText = ({name,amount}) => {
    const now = new Date();  

    // Format the date as DD.MM.YYYY  
    const day = String(now.getDate()).padStart(2, '0'); // Ensure two digits  
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Add 1 since months are zero-indexed  
    const year = now.getFullYear();  

    const formattedDate = `${day}.${month}.${year}`;  

  return (
    <div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {duration: 1} }} className='text-yellow-500 text-xs z-10 relative bottom-[7.3rem] left-[5.6rem] font-semibold w-[10rem] text-center'>{amount}ကျပ််</motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {duration: 1} }} className='text-yellow-500 text-xs z-10 relative bottom-[6rem] left-[5.6rem] font-semibold w-[10rem] text-center'>{name}</motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {duration: 1} }} className='text-yellow-500 bg-white text-xs z-10 relative bottom-[15.6rem] left-[15.6rem] font-semibold w-[5.3rem] text-center'><small className='text-black text-[.36rem]'>နေ့စွဲ -</small><small>{formattedDate}</small></motion.div>
    </div>
  )
}

export default OverlayText