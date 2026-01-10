import HeroSection from '@/components/hero-section'
import MissionAndVision from '@/components/mission-and-vision'
import OurActivitys from '@/components/our-activitys'
import OurPartners from '@/components/our-partners'
import ValuesSection from '@/components/values-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ValuesSection />
      <MissionAndVision />
      <OurPartners />
      <OurActivitys />
    </>
  )
}
