import PdtAcademyDevmnt from './pdt-academy-devmnt'
import PdtAcademyHero from './pdt-academy-hero'
import PdtAcademyPartners from './pdt-academy-partners'
import PdtAcademyRoad from './pdt-academy-road'
import PdtAcademyStatistic from './pdt-academy-statistic'

export default function PdtAcademyView() {
  return (
    <div className="relative z-0 pt-16">
      <PdtAcademyHero />

      <PdtAcademyStatistic />

      <PdtAcademyDevmnt />

      <PdtAcademyRoad />

      <PdtAcademyPartners />
    </div>
  )
}
