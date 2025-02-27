'use client'

import AppoinmentForm from "@/components/home/AppointmentForm"
import BMICalculator from "@/components/home/BMICalculator"
import Experience from "@/components/home/Experience"
import FAQ from "@/components/home/FAQ"
import Features from "@/components/home/Features"
import InstagramPosts from "@/components/home/InstagramPost"
import OurNumber from "@/components/home/OurNumbers"
import Patient from "@/components/home/Patient"
import Reviews from "@/components/home/Reviews"
import Specialization from "@/components/home/Specialization"
import SucessStories from "@/components/home/SucessStories"
import Carousel from "@/components/ui/Carousel"
import Cta from "@/components/ui/Cta"
import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import ProfileCard from "@/components/ui/ProfileCard"
import Testimonials from "@/components/ui/Testimonials"


const page = () => {
  return (
    <div>

      <Navbar />
      <Carousel />
     
      <ProfileCard />
      <OurNumber />
      <Patient />
      <Experience />
      <Specialization />
      <Features/>
      <SucessStories />
      <InstagramPosts/>
      <Cta />
      <FAQ />
      <AppoinmentForm />
      <Testimonials />
      {/* <Reviews /> */}
      <BMICalculator />
      <Footer />
    </div>
  )
}

export default page
