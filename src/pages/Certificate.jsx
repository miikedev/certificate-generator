import React from 'react'
import CorrectSvg from '../assets/correct.svg'
import BackArrow from '../assets/back-arrow.svg'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
const Certificate = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className='lg:mt-[100px] h-[640px] flex flex-col justify-between'>
        <Button onClick={() => navigate('/')} variant="outline" size="icon" className="float-left rounded-full">
            <img src={BackArrow} alt="" className=' w-4 text-black'/>
        </Button>
            <div>
            <img src={CorrectSvg} alt="" className='mx-auto'/>
            <div className='mt-[20px] text-center'>
                <h1 className='font-semibold text-[20px] leading-5  mb-2'>Congratulations!</h1>
                <p className='text-[14px]'>You donated Successfully.<br/>You can check your certificate.</p>
                <strong className='text-xs'>Fri, October 4, 6:00 PM</strong>
            </div>
            </div>
            <div className='flex flex-col gap-y-[10px]'>
                <Button className="w-full bg-[#006EFF] hover:bg-[#006EFFDF] rounded-full">View & download certificate</Button>
                <Button className="text-[#006EFF] hover:bg-transparent bg-transparent shadow-none">Donate again</Button>
            </div>
        </div>
    </>
  )
}

export default Certificate