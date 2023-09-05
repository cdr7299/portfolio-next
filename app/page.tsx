import HeroSection from "@/components/home/heroSection/hero-section";
import Education from "@/components/home/education";
import WorkEx from "@/components/home/workEx";
import Social from "@/components/home/social/social";
export default async function Home() {
  return (
    <div className="z-10 w-full px-1 md:px-5 lg:max-w-screen-xl">
      <HeroSection />
      <Education />
      <WorkEx />
      <Social />
    </div>
  );
}
