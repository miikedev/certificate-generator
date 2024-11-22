"use client"

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import NugpaySvg from '../assets/nugpay.svg'
import SdbSvg from '../assets/sdb.svg'
import { Button } from "@/components/ui/button"
import UserIcon from './icons/UserIcon'
import AmountIcon from './icons/AmountIcon' 
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useNavigate } from 'react-router-dom'
import { toast } from '@/hooks/use-toast'

const formSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  amount: z.string().refine(
    (val) => {
      const num = parseFloat(val)

      return !isNaN(num) && num > 0 && /^(?!0\d)\d*(\.\d{1,2})?$/.test(val)
    },
    {
      message: "Amount must be a positive number with up to 2 decimal places and no leading zeros",
    }
  ),
  paymentMethod: z.enum(["sdb", "nug-pay"], {
    required_error: "You need to select a payment method.",
  }),
})

export default function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      paymentMethod: undefined,
    },
  })

  function onSubmit(values) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Donation Received",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      })
    }, 2000)
    console.log(values)
    navigate('/certificate',{state: {name: values.username, amount: values.amount}})
  }

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-[.9rem]">Username</FormLabel>
              <FormControl>
                <Input icon={<UserIcon />} placeholder="Enter your username" className="pl-10 placeholder:left-1 placeholder:relative" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-[.9rem]">Donation Amount</FormLabel>
              <FormControl>
                <Input icon={<AmountIcon />} type="number" placeholder="Enter amount" className="pl-10 placeholder:left-1 placeholder:relative" {...field} min/>
              </FormControl>
              <FormDescription>
                Enter the amount you wish to donate.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="font-semibold mb-4 text-[18px]">Payment Method</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0 justify-between">
                    <FormLabel className="font-normal cursor-pointer flex-grow">
                      <div className='flex items-center'>
                      <img src={SdbSvg} alt="sdb icon" />
                       <span className='block relative left-[.4rem]'>SDB</span>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <RadioGroupItem value="sdb" className="outline-blue-600" />
                    </FormControl>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 justify-between">
                    <FormLabel htmlFor="nug-pay" className="font-normal cursor-pointer flex-grow">
                      <div className='flex items-center'>
                      <img src={NugpaySvg} alt="nugpay icon" className='block relative right-1'/>
                        NUG Pay
                      </div>
                    </FormLabel>
                    <FormControl>
                      <RadioGroupItem value="nug-pay" id="nug-pay" className="outline-blue-600" />
                    </FormControl>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-[#006EFF] hover:bg-[#006EFFDF] rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Donate"}
        </Button>
      </form>
    </Form>
    </>
  )
}