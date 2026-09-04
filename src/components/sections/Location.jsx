import { ArrowUpRight, MapPin } from 'lucide-react'
import SectionIntro from '../ui/SectionIntro'
import { distances } from '../../constants'

export default function Location() {
  return (
    <section id="location" className="section location-section">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:px-12">
        <div>
          <SectionIntro number="" label="The location" title={<>Close to everything.<br /><i>True to itself.</i></>}>
            <p>Set in Dehiwala, where the city meets the sea. A connected address for workdays, weekends and all the quiet moments between.</p>
          </SectionIntro>
          <div className="distance-list">
            {distances.map(([place, time]) => (
              <div key={place}><span>{place}</span><b>{time}</b></div>
            ))}
          </div>
          <a href="#contact" className="text-link">View on map <ArrowUpRight size={15} /></a>
        </div>
        <div className="map-art">
          <div className="map-grid" />
          <div className="map-route" />
          <MapPin className="map-pin pin-a" />
          <MapPin className="map-pin pin-b" />
          <MapPin className="map-pin pin-c" />
          <div className="map-label"><span>01</span> A&Y Residences</div>
          <div className="map-caption">Dehiwala<br /><small>06°51' N · 79°52' E</small></div>
        </div>
      </div>
    </section>
  )
}
