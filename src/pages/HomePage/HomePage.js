import React from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Header from "../../components/Header/Header";
import BannerSection from "../../components/BannerSection/BannerSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import PricingSection from "../../components/PricingSection/PricingSection";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection";
import TechnologiesSection from "../../components/TechnologiesSection/TechnologiesSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import FooterSection from "../../components/FooterSection/FooterSection";
import MenuModal from "../../components/MenuModal/MenuModal";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
function HomePage() {
  return (
    <MainWrapper>
      <Header />
      <BannerSection />
      <FeaturesSection />
      <AboutSection />
      <PricingSection />
      <PortfolioSection />
      <TechnologiesSection />
      <ContactSection />
      <FooterSection />
      <MenuModal />
      <ScrollToTop />
    </MainWrapper>
  );
}

export default HomePage;
