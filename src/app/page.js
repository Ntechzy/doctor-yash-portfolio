'use client'
import BMICalculator from '@/components/BMICalculator'
import FAQ from '@/components/FAQ'
import Reviews from '@/components/Reviews'
import ProfileCard from '@/components/ui/ProfileCard'
import Specialization from '@/components/ui/Specialization'

const page = () => {
  return (
    <div>
      <BMICalculator/>
      <FAQ/>
      <Reviews/>      <Specialization />
      <ProfileCard />
    </div>
  )
}

export default page
