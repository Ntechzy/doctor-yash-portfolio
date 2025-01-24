import AboutDoctor from '@/components/HomeComponent/AboutDoctor'
import HeroSection from '@/components/HomeComponent/HeroSection'
import Navbar from '@/components/HomeComponent/Navbar'
import React from 'react'
import Specialist from '@/components/HomeComponent/Speciality'
import HomeServices from '@/components/HomeComponent/HomeServices'

const Page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutDoctor/>
      <Specialist/>
      {/* <HomeServices/> */}
    </div>
  )
}

export default Page