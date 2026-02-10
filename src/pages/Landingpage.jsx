import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Tools from "../components/Tools";
import Brands from "../components/brands";
import Solutions from "../components/solutions";
import FAQ from "../components/Faq";
import Connect from "../components/connect";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Tools />
      <Solutions />
      <Brands />
      <FAQ />
      <Connect />
      <Footer />
    </>
  );
}
