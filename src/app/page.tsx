'use client'
import ContactSection from "@/app/components/contactSection";
import  Navbar_menu  from "./components/navbar";
import Carousel from "./components/carousel";
import GradientTextSection from "./components/GradientTextSection";
import AboutUsSection from "./components/AboutUsSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import OurVision from "./components/OurVision";
import FeaturedCourses from "./components/FeaturedCourses";
import Instructors from "./components/Instructors";
import Footer from "./components/footer";
import WhatsAppIcon from "./components/WhatsAppIcon";

export default function Home() {
  return (
    <div className="flex w-full flex-col min-h-screen ">
       <div className="pt-20">
          <ContactSection />
       </div>
      
        
      <div className=""><Navbar_menu /></div>
      
      <GradientTextSection />
      <Carousel />
      <AboutUsSection />
      
      <OurVision />
      <FeaturedCourses />
      <div className=" mx-0 p-0 w-full"> <TestimonialsCarousel /> </div>
      <Instructors />
      <WhatsAppIcon />
      <Footer />

    </div>
   

  );
}
