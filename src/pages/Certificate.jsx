import CorrectSvg from '../assets/correct.svg'
import { Button } from '@/components/ui/button'
import { useNavigate, useLocation } from 'react-router-dom'
import BackButton from '@/components/BackButton'
import { Helmet } from 'react-helmet'
import CustomHelmet from '@/components/CustomHelmet'
const Certificate = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const now = new Date();  

    const options = {  
        weekday: 'short',  
        year: 'numeric',  
        month: 'long',  
        day: 'numeric',  
        hour: 'numeric',  
        minute: 'numeric',  
        hour12: true, // To get the PM/AM format  
    };  

    const formattedDateTime = now.toLocaleString('en-US', options);  

  return (
    <>
        <CustomHelmet   
            title="Congratulations! - Your Donation Matters"   
            description="Thank you for your donation! You can view or download your donation certificate here."  
            keywords="donation, certificate, thank you"  
        /> 
        <div className='h-[640px] flex flex-col justify-between'>
            <BackButton url="/"/>
            <div>
            <img src={CorrectSvg} alt="" className='mx-auto'/>
            <div className='mt-[20px] text-center'>
                <h1 className='font-semibold text-[20px] leading-5  mb-2'>Congratulations!</h1>
                <p className='text-[14px]'>You donated Successfully.<br/>You can check your certificate.</p>
                <strong className='text-xs'>{formattedDateTime}</strong>
            </div>
            </div>
            <div className='flex flex-col gap-y-[10px]'>
                <Button className="w-full bg-[#006EFF] hover:bg-[#006EFFDF] rounded-full" onClick={() => navigate('/certificate/view',{state:{name:location.state.name,amount:location.state.amount}})}>View certificate</Button>
                <Button className="text-[#006EFF] hover:bg-transparent bg-transparent shadow-none" onClick={() => navigate('/')}>Donate again</Button>
            </div>
        </div>
    </>
  )
}

export default Certificate