import React from 'react'
import { Button } from '@/components/ui/button'
import DonationForm from '@/components/DonationForm'
const Home = () => {
  return (
    <>
        <div className="logo">Logo</div>
        <section className="donate">
            <h2>Donate</h2>
            <DonationForm />
        </section>
        <section className="payment-options"></section>
    </>
  )
}

export default Home