import React from 'react'
import { Button } from '@/components/ui/button'
import DonationForm from '@/components/DonationForm'
import Logo from '../assets/cert-gen-logo.png'
const Home = () => {
  return (
    <>
        <div className="logo flex justify-center w-full">
            <img src={Logo} alt="" className='w-[167px]'/>
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