'use client'
import BMICalculator from '@/components/BMICalculator'
import FAQ from '@/components/FAQ'
import Reviews from '@/components/Reviews'
import ProfileCard from '@/components/ui/ProfileCard'
import Specialization from '@/components/home/Specialization'
import Experience from '@/components/home/Experience'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import Carousel from '@/components/ui/Carousel'

const page = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Specialization />
      <Experience />
      <ProfileCard />
      <BMICalculator />
      <FAQ />
      <Reviews />
      <Footer />
    </div>
  )
}

export default page
