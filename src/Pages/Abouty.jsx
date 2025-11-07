import React from 'react'
import AboutHeader from './AboutHeader'
import FitnessFocusSection from './FitnessFocusSection'
import EventScheduleBanner from '../Components/EventScheduleBanner'
import TestimonialSection from '../Components/TestimonialSection'
import BenefitsSection from '../Components/BenefitsSection'
import AssociatesSection from '../Components/AssociatesSection'

const Abouty = () => {
  return (
    <div>
          <AboutHeader />
          <FitnessFocusSection />
          <EventScheduleBanner />
          <TestimonialSection />
          <AssociatesSection/>
    </div>
  )
}

export default Abouty
