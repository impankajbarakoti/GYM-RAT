import React from "react";
import HeroSection from "./HeroSection";
import CallToActionSplit from "./CallToActionSplit";
import ServicesFeature from "./ServicesFeature";
import OpeningHours from "./OpeningHours";
import FeatureSection from "./FeatureSection";
import BMICalculator from "./BMICalculator";
import EventScheduleBanner from "./EventScheduleBanner";
import PromoBanner from "./PromoBanner";
import TestimonialSection from "./TestimonialSection";
import BenefitsSection from "./BenefitsSection";
import AssociatesSection from "./AssociatesSection";
// import ContactFooter from "./ContactFooter";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CallToActionSplit />
      <ServicesFeature />
      <OpeningHours />
      <FeatureSection />
      <BMICalculator />
      <EventScheduleBanner />
      <PromoBanner />
      <TestimonialSection />
      <BenefitsSection />
      <AssociatesSection />
      {/* <ContactFooter/> */}
    </div>
  );
};

export default Home;
