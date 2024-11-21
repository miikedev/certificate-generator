"use client"

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
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
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  amount: z.coerce.number().min(1, {
    message: "Amount must be at least 1.",
  }),
  paymentMethod: z.enum(["creditCard", "paypal"], {
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
      amount: 0,
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
    }, 1000)
    navigate('/certificate')

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[.9rem]">Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
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
            <FormItem>
              <FormLabel className="text-[.9rem]">Donation Amount</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter amount" {...field} />
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
              <FormLabel>Payment Method</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0 justify-between">
                    <FormLabel className="font-normal">
                      SDB
                    </FormLabel>
                    <FormControl>
                      <RadioGroupItem value="creditCard" className="outline-blue-600" />
                    </FormControl>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 justify-between">
                    <FormLabel className="font-normal">
                      NUG Pay
                    </FormLabel>
                    <FormControl>
                      <RadioGroupItem value="paypal" className="outline-blue-600" />
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
  )
}