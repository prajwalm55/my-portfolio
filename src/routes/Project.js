import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';


const Project = () => {
  return (
    <div><div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work />
      {/* <PricingCard /> */}
      <Footer />
      </div></div>
  )
}

export default Project