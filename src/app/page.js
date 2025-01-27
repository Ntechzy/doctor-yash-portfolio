'use client'
import BMICalculator from '@/components/BMICalculator'
import FAQ from '@/components/FAQ'
import Reviews from '@/components/Reviews'
import ProfileCard from '@/components/ui/ProfileCard'
import Specialization from '@/components/home/Specialization'
import Experience from '@/components/home/Experience'

const page = () => {
  return (
    <div>
      <Specialization />
      <Experience />
      <ProfileCard />
      <BMICalculator />
      <FAQ />
      <Reviews />
    </div>
  )
}

export default page
