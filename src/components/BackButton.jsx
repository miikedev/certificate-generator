'use client'

import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function BackButton({url,state}) {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(url,{state}) // This navigates to the previous route
  }

  return (
    <Button 
      onClick={handleBack} 
      variant="outline" 
      size="icon" 
      className="rounded-full"
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Go back</span>
    </Button>
  )
}

