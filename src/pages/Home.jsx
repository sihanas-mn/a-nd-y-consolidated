import Hero from '../components/sections/Hero'
import Project from '../components/sections/Project'
import Location from '../components/sections/Location'
import Apartments from '../components/sections/Apartments'
import Amenities from '../components/sections/Amenities'
import Investment from '../components/sections/Investment'
import Gallery from '../components/sections/Gallery'
import LuxuryMarquee from '../components/LuxuryMarquee'
import Contact from '../components/sections/Contact'
import SectionSeparator from '../components/ui/SectionSeparator'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionSeparator theme="dark-to-light" label="01 · Overview" />
      <Project />
      <SectionSeparator theme="stone" label="02 · Location" />
      <Location />
      <SectionSeparator theme="stone-to-dark" label="03 · Residences" />
      <Apartments />
      <SectionSeparator theme="dark-to-light" label="04 · Amenities" />
      <Amenities />
      <SectionSeparator theme="light-to-dark-investment" label="05 · Outlook" />
      <Investment />
      <SectionSeparator theme="dark-investment-to-light" label="06 · Collection" />
      <Gallery />
      <SectionSeparator theme="light-to-dark" label="07 · Perspectives" />
      <LuxuryMarquee />
      <SectionSeparator theme="dark" label="08 · Concierge" />
      <Contact />
    </main>
  )
}
