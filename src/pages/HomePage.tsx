import { About } from "@/components/About";
import { ContactUs } from "@/components/ContactUs";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { QuoteSection } from "@/components/QuoteSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import BasePage from "./BasePage";

const HomePage = () => {
  return (
    <>
      <BasePage isHome={true} title="Mosaic.ai">
        <Hero />
        <HowItWorks />
        <QuoteSection />
        <Services />
        <About />
        <ContactUs />
        <FAQ />
      </BasePage>
      <ScrollToTop />
    </>
  );
};

export default HomePage;
