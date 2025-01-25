'use client'
import BMICalculator from '@/components/BMICalculator'
import FAQ from '@/components/FAQ'
import Reviews from '@/components/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
      <BMICalculator/>
      <FAQ/>
      <Reviews/>
    </div>
  )
}

export default page
