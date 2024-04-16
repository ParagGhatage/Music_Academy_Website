import FeaturedCourses from '@/components/FeaturedCourses';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection'
import Instructors from '@/components/Instructors';
import MusicTestimonialCards from '@/components/TestimonialCards';
import UpcomingWebinars from '@/components/UpcomingWebinars';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <h1 className="text-3xl text-center"></h1>
     <HeroSection/>
     <FeaturedCourses/>
     <WhyChooseUs/>
     <MusicTestimonialCards/>
     <UpcomingWebinars/>
     <Instructors/>
     <Footer/>
   </main>
  );
}
