import Hero from '../components/sections/Hero'
import Project from '../components/sections/Project'
import Location from '../components/sections/Location'
import Apartments from '../components/sections/Apartments'
import Amenities from '../components/sections/Amenities'
import Investment from '../components/sections/Investment'
import Gallery from '../components/sections/Gallery'
import LuxuryMarquee from '../components/LuxuryMarquee'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Project />
      <Location />
      <Apartments />
      <Amenities />
      <Investment />
      <Gallery />
      <LuxuryMarquee />
      <Contact />
    </main>
  )
}
