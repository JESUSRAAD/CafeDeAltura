import CardsServicesSection from '@/components/CardsServicesSection'
import Footer from '@/components/Footer'
import HomeCards from '@/components/HomeCards'
import React from 'react'

const page = () => {
  return (
 <>
  <HomeCards acc={8} title={"Últimos orígenes"} margin={true}/>
  <CardsServicesSection/>
  <Footer/>
 </>
  )
}

export default page