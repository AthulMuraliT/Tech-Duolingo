import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyTech from "../components/WhyTech";
import HowItWorks from "../components/HowItWorks";
import PreviewTerm from "../components/PreviewTerm";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyTech />
      <HowItWorks />
      <PreviewTerm />
      <Footer />
    </>
  );
}
