import CustomHelmet from '@/components/CustomHelmet'
import DonationForm from '@/components/DonationForm'
import { Button } from '@/components/ui/button'
import React from 'react'

import Logo from '../assets/cert-gen-logo.svg'

const Home = () => {
  return (
    <>
    <CustomHelmet   
        title="Support Us - Make a Donation"   
        description="Help us make a difference! Your donation supports our projects and initiatives."   
        keywords="donation, charity, support"  
      />  
        <div>
          <div className="logo flex justify-center w-full">
              <img src={Logo} alt="" className='w-[167px]'/>
          </div>
        </div>
        <section className="donate">
            <h2>Donation</h2>
            <DonationForm />
        </section>
        <section className="payment-options"></section>
    </>
  )
}

export default Home