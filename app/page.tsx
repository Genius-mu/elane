import HeroExperience from "@/components/hero/HeroExperience";
import EditorialIntro from "@/components/sections/EditorialIntro";
import RoomShowcase from "@/components/sections/RoomShowcase";
import ExperienceShowcase from "@/components/sections/ExperienceShowcase";
import WellnessSection from "@/components/sections/WellnessSection";
import DiningSection from "@/components/sections/DiningSection";
import ExperienceGrid from "@/components/sections/ExperienceGrid";
import HotelStory from "@/components/sections/HotelStory";
import ImmersiveGallery from "@/components/sections/ImmersiveGallery";
import Testimonial from "@/components/sections/Testimonial";
import JournalSection from "@/components/sections/JournalSection";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-[#17150F]">
      {/* 1. Hero Experience */}
      <HeroExperience />

      {/* 2. Editorial Introduction & Animated Stats */}
      <EditorialIntro />

      {/* 3. Rooms & Suites Showcase */}
      <RoomShowcase />

      {/* 4. Signature Hotel Facilities with Tabbed Motion */}
      <ExperienceShowcase />

      {/* 5. Cinematic Full-Bleed Wellness Section */}
      <WellnessSection />

      {/* 6. Culinary Destinations: ORIGIN, LUMEN, TERRACE */}
      <DiningSection />

      {/* 7. Asymmetric Experiences Grid */}
      <ExperienceGrid />

      {/* 8. Split Editorial Hotel Story */}
      <HotelStory />

      {/* 9. Signature 3D Photographic Gallery Wall */}
      <ImmersiveGallery />

      {/* 10. Minimalist Testimonial */}
      <Testimonial />

      {/* 11. The Élane Journal Articles */}
      <JournalSection />

      {/* 12. Private Notes Newsletter */}
      <Newsletter />
    </div>
  );
}
