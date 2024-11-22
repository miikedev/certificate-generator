import React, { lazy, Suspense } from 'react'
import CustomHelmet from '@/components/CustomHelmet'
import Spinner from '@/components/Spinner'
import Logo from '../assets/cert-gen-logo.svg'

const DonationForm = lazy(() => import('@/components/DonationForm'))

const Home = () => {
  return (
    <>
      <CustomHelmet   
        title="Support Us - Make a Donation"   
        description="Help us make a difference! Your donation supports our projects and initiatives."   
        keywords="donation, charity, support"  
      />  
      <div className="flex flex-col items-center">
        <div className="logo w-full flex justify-center">
          <img src={Logo} alt="Certificate Generator Logo" className="max-w-xs" />
        </div>
        <section className="donate w-full max-w-md">
          <Suspense fallback={<Spinner />}>
            <h2 className="font-semibold text-[18px]">Donation</h2>
            <DonationForm />
          </Suspense>
        </section>
      </div>
    </>
  )
}

export default Home