import HomeCaseStudy from '../home/home-case-study'
import HomeFooter from '../home/home-footer'
import HomeStandard from '../home/home-standard'
import HomeTechStacks from '../home/home-tech-stacks'

import PdtAcademyAiAssistant from './pdt-academy-ai-assistant'
import PdtAcademyDevmnt from './pdt-academy-devmnt'
import PdtAcademyHero from './pdt-academy-hero'
import PdtAcademyStatistic from './pdt-academy-statistic'

export default function PdtAcademyView() {
  return (
    <div className="relative z-0 pt-16">
      <PdtAcademyHero />

      <PdtAcademyStatistic />

      <PdtAcademyDevmnt />

      <PdtAcademyAiAssistant />
      <HomeTechStacks />

      <HomeStandard />
      <HomeCaseStudy />
      <HomeFooter />
    </div>
  )
}
