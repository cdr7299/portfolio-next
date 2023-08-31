import HeroSection from "@/components/home/heroSection/hero-section";
import Education from "@/components/home/education";
import WorkEx from "@/components/home/workEx";
export default async function Home() {
  return (
    <div className="z-10 w-full px-5  lg:max-w-screen-xl xl:px-0">
      <HeroSection />
      <Education />
      <WorkEx />
    </div>
  );
}
